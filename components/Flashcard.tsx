"use client";

import { useState } from "react";
import type { Card } from "@/data/cards";

type FlashcardProps = {
  card: Card;
};

export function Flashcard({ card }: FlashcardProps) {
  // Flip state is intentionally local and uncontrolled. The parent resets it
  // by varying this component's `key`, which remounts it on the front face.
  const [flipped, setFlipped] = useState(false);

  const hasDescription = card.description.trim().length > 0;
  const hasAdvantage = card.advantage.trim().length > 0;

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${card.name}. ${flipped ? "Showing description." : "Click to reveal description."}`}
      className="flip-card group h-56 w-full cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
    >
      <div className="flip-card-inner" data-flipped={flipped}>
        {/* Front */}
        <div className="flip-face flex-col gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-colors group-hover:border-neutral-600">
          <span className="text-balance text-center text-xl font-semibold tracking-tight text-neutral-50">
            {card.name}
          </span>
          {card.expands && (
            <span className="text-balance text-center text-xs leading-snug text-neutral-500">
              {card.expands}
            </span>
          )}
        </div>

        {/* Back */}
        {/* pb-9 reserves clearance for the absolutely-positioned name label. */}
        <div className="flip-face flip-face-back flex-col gap-3 rounded-xl border border-neutral-700 bg-neutral-100 px-5 pb-9 pt-6">
          {hasDescription ? (
            <span className="text-balance text-center text-[15px] font-medium leading-snug text-neutral-900">
              {card.description}
            </span>
          ) : (
            <span className="text-balance text-center text-sm italic text-neutral-500">
              (no description yet)
            </span>
          )}

          {hasAdvantage && (
            <span className="max-w-[28ch] text-balance border-t border-neutral-300 pt-3 text-center text-xs leading-snug text-neutral-500">
              {card.advantage}
            </span>
          )}

          <span className="absolute bottom-2.5 text-[10px] uppercase tracking-widest text-neutral-400">
            {card.name}
          </span>
        </div>
      </div>
    </button>
  );
}
