import { Deck } from "@/components/Deck";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">
          Vercel Product Flashcards
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Click any card to see what the product does, and why it&rsquo;s worth
          using.
        </p>
      </header>

      <Deck />
    </main>
  );
}
