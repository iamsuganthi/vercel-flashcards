export type Card = {
  /** Product name shown on the front of the card. */
  name: string;
  /** What the acronym stands for. Shown small under the name. Omit for non-acronyms. */
  expands?: string;
  /** What the product actually does. Plain words, verb-led, no benefit language. */
  description: string;
  /** Why it's worth using at all — the payoff. Rendered muted, below the description. */
  advantage: string;
};

/**
 * The flashcard deck, kept in alphabetical order.
 *
 * To add a card: append `{ name, description, advantage }` anywhere — the
 * exported `cards` array is sorted by name, so the deck can never drift out
 * of order. Keeping this literal alphabetical too is just for readability.
 *
 * Style — keep these two jobs separate:
 *   description — what it *does*. Verb-led, mechanical, no selling.
 *   advantage   — what you *get*. The payoff. Muted second line.
 * Both stay around five to seven words. If a benefit word ("fast", "safe",
 * "easily") shows up in a description, it probably belongs in the advantage.
 */
const deck: Card[] = [
  {
    name: "AI Gateway",
    description: "Routes requests to many model providers",
    advantage: "Model-agnostic, with spend controls and failover",
  },
  {
    name: "Blob",
    description: "Stores files and serves them by URL",
    advantage: "No buckets or credentials to manage",
  },
  {
    name: "BotID",
    description: "Detects whether a visitor is automated",
    advantage: "No CAPTCHAs for real users",
  },
  {
    name: "CDN",
    expands: "Content Delivery Network",
    description: "Serves cached content from near users",
    advantage: "Fast worldwide without hitting your origin",
  },
  {
    name: "Connect",
    description: "Logs your app into third-party services",
    advantage: "No provider secrets for you to store",
  },
  {
    name: "Cron Jobs",
    description: "Run this function on a schedule",
    advantage: "No separate scheduler to operate",
  },
  {
    name: "Data Cache",
    description: "Reuses fetch results instead of refetching",
    advantage: "Fewer API calls, faster pages",
  },
  {
    name: "Deployment Protection",
    description: "Restricts who can open your deployment URLs",
    advantage: "Share previews without exposing them publicly",
  },
  {
    name: "Draft Mode",
    description: "See unpublished CMS drafts on the site",
    advantage: "Review content before it goes live",
  },
  {
    name: "Edge Config",
    description: "Key-value store for small config data",
    advantage: "Change settings without redeploying",
  },
  {
    name: "Firewall",
    description: "Filters incoming requests against your rules",
    advantage: "Attacks stop before they cost you",
  },
  {
    name: "Fluid Compute",
    description: "Serverless that acts like a server",
    advantage: "No cold starts, no idle billing",
  },
  {
    name: "Image Optimization",
    description: "Resizes and converts images on demand",
    advantage: "Faster loads without manual resizing",
  },
  {
    name: "ISR",
    expands: "Incremental Static Regeneration",
    description: "Serves cached pages, regenerates them in background",
    advantage: "Fresh content at static-page speed",
  },
  {
    name: "Microfrontends",
    description: "Separate apps stitched into one site",
    advantage: "Teams ship without blocking each other",
  },
  {
    name: "Observability",
    description: "Collects logs, traces, and metrics",
    advantage: "Find the slow request fast",
  },
  {
    name: "Passport",
    description: "Verifies the end user's identity",
    advantage: "Backends can trust who's calling",
  },
  {
    name: "Queues",
    description: "Holds messages until a worker processes them",
    advantage: "Slow work never blocks responses",
  },
  {
    name: "Rolling Releases",
    description: "Ship to one percent before everyone",
    advantage: "Catch bad deploys before everyone sees",
  },
  {
    name: "Routing Middleware",
    description: "Intercepts requests before they reach your app",
    advantage: "Auth and redirects before rendering",
  },
  {
    name: "Sandbox",
    description: "Runs code in an isolated VM",
    advantage: "Run AI-generated code without risk",
  },
  {
    name: "Secure Compute",
    description: "Gives functions a dedicated network and IPs",
    advantage: "Reach IP-allowlisted private backends",
  },
  {
    name: "Skew Protection",
    description: "Old tabs keep using the old version",
    advantage: "No broken sessions after a deploy",
  },
  {
    name: "Speed Insights",
    description: "Measures how fast pages load for visitors",
    advantage: "Real users, not synthetic lab tests",
  },
  {
    name: "Toolbar",
    description: "Comment and inspect directly on a deployment",
    advantage: "Feedback lands in context, not Slack",
  },
  {
    name: "v0",
    description: "Describe an app, it builds it",
    advantage: "Prototype in minutes, not days",
  },
  {
    name: "Web Analytics",
    description: "Counts visitors, page views, and referrers",
    advantage: "No cookie banner required",
  },
  {
    name: "Workflows",
    description: "Runs multi-step jobs, persisting each step",
    advantage: "Resumes where it left off",
  },
];

/**
 * Sorted on export so the rendered deck is always alphabetical, regardless of
 * where a new card gets appended above. `sensitivity: "base"` keeps casing out
 * of it, so "v0" sorts between "Toolbar" and "Web Analytics" rather than
 * being pushed to the end.
 */
export const cards: Card[] = [...deck].sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
);
