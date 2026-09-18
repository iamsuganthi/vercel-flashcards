# Flashcards

A searchable flip-card deck for learning Vercel products.

Each card shows a product name on the front. Click it, and the back gives you
two things:

- **What it does** — plain, mechanical, no marketing language.
- **Why it's worth using** — the payoff, in smaller muted text underneath.

It's built for recall rather than reference. The descriptions are deliberately
short (five to seven words) so the deck works as a memory jog for things you've
already learned once, not as documentation.

Acronyms like `ISR` and `CDN` show what they stand for under the name, so you're
never stuck on the prompt itself.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Editing the deck

Everything lives in **`data/cards.ts`**. That's the only file you need to touch
to change the content.

```ts
{
  name: "ISR",
  expands: "Incremental Static Regeneration", // optional, acronyms only
  description: "Serves cached pages, regenerates them in background",
  advantage: "Fresh content at static-page speed",
}
```

| Field         | Purpose                                                              |
| ------------- | -------------------------------------------------------------------- |
| `name`        | Front of the card.                                                   |
| `expands`     | Optional. What an acronym stands for, shown small under the name.    |
| `description` | What the product *does*. Verb-led, mechanical, no benefit language.  |
| `advantage`   | What you *get*. The payoff, muted second line.                       |

Two conventions worth keeping:

- If a benefit word (*fast*, *safe*, *easily*) creeps into a `description`, it
  probably belongs in `advantage` instead. Keeping the two jobs separate is what
  stops every card sounding like a pitch.
- Add new cards anywhere in the array. The exported `cards` is sorted by name,
  so the deck can't drift out of alphabetical order.

## How it works

- **`data/cards.ts`** — the deck, plus the alphabetical sort on export.
- **`components/Deck.tsx`** — search box and the responsive grid. Search matches
  across name, acronym expansion, description, and advantage, so you can find a
  card by meaning rather than just by name.
- **`components/Flashcard.tsx`** — a single card. Flip state is local and
  uncontrolled; the parent resets it by varying the component `key`, so filtering
  the deck never leaves a card sitting face-up with the answer showing.
- **`app/globals.css`** — the 3D flip, written by hand rather than with Tailwind's
  3D utilities so the transform chain stays explicit. Respects
  `prefers-reduced-motion`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
