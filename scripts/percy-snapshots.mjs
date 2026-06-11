#!/usr/bin/env node
/**
 * Percy visual regression snapshots for the StudiosShowcase CTA buttons.
 *
 * Runs against a locally served production build (vite preview).
 * Captures the landing page (which renders <StudiosShowcase />) plus a
 * focused snapshot per studio card with its CTA in the hovered state so
 * any visual change to the "Start creating" buttons is diffed on every PR.
 */
import { chromium } from "playwright";
import percySnapshot from "@percy/playwright";

const BASE_URL = process.env.PERCY_BASE_URL || "http://localhost:4173";

const STUDIOS = [
  { key: "store", title: "Store Builder" },
  { key: "threaditor", title: "Threaditor" },
  { key: "video", title: "Video Studio" },
  { key: "social", title: "NeuraSocial" },
  { key: "podcast", title: "Podcast Studio" },
  { key: "hub", title: "Innovators Hub" },
];

async function gotoHome(page) {
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  // Anchor: wait until the showcase heading is rendered.
  await page.getByRole("heading", { name: /Six studios\./i }).waitFor();
}

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    await gotoHome(page);
    await percySnapshot(page, "Landing – Studios Showcase (default)");

    for (const studio of STUDIOS) {
      const heading = page.getByRole("heading", { name: studio.title, level: 3 });
      await heading.scrollIntoViewIfNeeded();

      // Hover the card to reveal the CTA row (it expands on group-hover).
      const card = heading.locator(
        'xpath=ancestor::article[contains(@class, "rounded-2xl")][1]',
      );
      await card.hover();
      const cta = card.getByRole("button", { name: /start creating/i });
      await cta.waitFor({ state: "visible" });

      await percySnapshot(page, `StudiosShowcase – ${studio.title} card (hover)`, {
        scope: "article:has(h3)",
      });
    }
  } finally {
    await context.close();
    await browser.close();
  }
}

run().catch((err) => {
  console.error("[percy-snapshots] failed:", err);
  process.exit(1);
});