"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cards } from "@/data/cards";
import { Flashcard } from "./Flashcard";

export function Deck() {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Put the caret in the search box on load so you can start typing straight
  // away. Done via ref rather than the `autoFocus` attribute, which is
  // unreliable across hydration.
  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const trimmed = query.trim();

  const results = useMemo(() => {
    if (!trimmed) return cards;
    const q = trimmed.toLowerCase();
    // Match across every field so the deck is searchable by meaning and
    // payoff, not just by product name.
    return cards.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.expands?.toLowerCase().includes(q) ?? false) ||
        c.description.toLowerCase().includes(q) ||
        c.advantage.toLowerCase().includes(q),
    );
  }, [trimmed]);

  return (
    <div className="w-full">
      <div className="relative mb-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="m13.5 13.5 3.5 3.5" strokeLinecap="round" />
        </svg>

        <input
          ref={searchRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          aria-label="Search flashcards"
          className="w-full rounded-lg border border-neutral-800 bg-neutral-900 py-3 pl-11 pr-24 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
        />

        {trimmed && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
          >
            Clear
          </button>
        )}
      </div>

      <p className="mb-4 text-xs text-neutral-500" aria-live="polite">
        {results.length} of {cards.length} cards
      </p>

      {results.length === 0 ? (
        <p className="rounded-lg border border-dashed border-neutral-800 py-16 text-center text-sm text-neutral-500">
          No products match &ldquo;{trimmed}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((card) => (
            // Keying on the query too remounts each card when the deck is
            // re-filtered, so results never appear already-flipped.
            <Flashcard key={`${card.name}:${trimmed}`} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
