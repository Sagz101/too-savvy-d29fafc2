import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StudiosShowcase from "./StudiosShowcase";

// Strip framer-motion animations so snapshots are deterministic.
vi.mock("framer-motion", async () => {
  const React = await import("react");
  const passthrough =
    (Tag: string) =>
    ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      // Drop motion-only props that would otherwise leak into the DOM snapshot.
      const {
        initial: _i,
        animate: _a,
        exit: _e,
        transition: _t,
        whileHover: _wh,
        whileTap: _wt,
        whileInView: _wi,
        layout: _l,
        layoutId: _lid,
        viewport: _v,
        ...rest
      } = props as Record<string, unknown>;
      return React.createElement(Tag, rest as React.HTMLAttributes<HTMLElement>, children);
    };
  return {
    motion: new Proxy({}, { get: (_t, key: string) => passthrough(key) }),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

function renderShowcase() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <StudiosShowcase />
    </MemoryRouter>,
  );
}

const studioTitles = [
  "Store Builder",
  "Threaditor",
  "Video Studio",
  "NeuraSocial",
  "Podcast Studio",
  "Innovators Hub",
] as const;

describe("StudiosShowcase – visual regression", () => {
  it("matches the full showcase snapshot", () => {
    const { container } = renderShowcase();
    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(studioTitles)(
    "matches the CTA button snapshot for %s",
    (title) => {
      renderShowcase();
      const heading = screen.getByRole("heading", { name: title, level: 3 });
      const card = heading.closest("article") as HTMLElement;
      const cta = within(card).getByRole("button", { name: /start creating/i });
      expect(cta).toMatchSnapshot();
    },
  );

  it.each(studioTitles)(
    "matches the card markup snapshot for %s",
    (title) => {
      renderShowcase();
      const heading = screen.getByRole("heading", { name: title, level: 3 });
      const card = heading.closest("article");
      expect(card).toMatchSnapshot();
    },
  );
});