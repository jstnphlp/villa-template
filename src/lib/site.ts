// Centralized marketing content and external links.
export const FACEBOOK_URL = "https://www.facebook.com/beyond.ink";

export const images = {
  hero: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2200&q=88",
  story: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=85",
  suite: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1100&q=85",
  villa: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
  dining: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  events: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
  pool: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1100&q=85",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1100&q=85",
} as const;

export const stays = [
  { name: "Ocean Suites", detail: "For two · King bed · Private terrace", image: images.suite },
  { name: "Garden Villas", detail: "For four · Two bedrooms · Plunge pool", image: images.villa },
] as const;

export const reviews = [
  ["Every detail felt considered—from the quiet mornings to the beautifully prepared dinners.", "Mara & Joel, Manila"],
  ["The kind of place that makes you slow down. We left rested, sun-kissed, and already planning a return.", "Anika C., Singapore"],
  ["Our family celebration here was effortless and genuinely memorable.", "The Ramos family"],
] as const;
