import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import StudiosShowcase from "./StudiosShowcase";

// Avoid framer-motion animation noise in tests
vi.mock("framer-motion", async () => {
  const React = await import("react");
  const passthrough =
    (Tag: string) =>
    ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) =>
      React.createElement(Tag, props as React.HTMLAttributes<HTMLElement>, children);
  return {
    motion: new Proxy(
      {},
      { get: (_t, key: string) => passthrough(key) },
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

function LocationProbe() {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
}

function renderShowcase() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StudiosShowcase />
              <LocationProbe />
            </>
          }
        />
        <Route path="*" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

const cases = [
  { title: "Store Builder", route: "/studio/store" },
  { title: "Threaditor", route: "/studio/threaditor" },
  { title: "Video Studio", route: "/studio/video" },
  { title: "NeuraSocial", route: "/studio/social" },
  { title: "Podcast Studio", route: "/studio/podcast" },
  { title: "Innovators Hub", route: "/studio/hub" },
] as const;

describe("StudiosShowcase – Start creating navigation", () => {
  it.each(cases)(
    "navigates to $route when the $title card CTA is clicked",
    async ({ title, route }) => {
      const user = userEvent.setup();
      renderShowcase();

      const heading = screen.getByRole("heading", { name: title, level: 3 });
      const card = heading.closest("article");
      expect(card).not.toBeNull();

      const cta = within(card as HTMLElement).getByRole("button", {
        name: /start creating/i,
      });
      await user.click(cta);

      expect(screen.getByTestId("location")).toHaveTextContent(route);
    },
  );
});