// Centralized marketing content and external links.
import hero from "@/public/hero.jpg";
import gardenArrival from "@/public/AHRPTWkvwGwF_tgVE4Oewa8Esn-z1lfgp4QPKjE7MvL0QhHpTTlnqQjWB08CFmAJkXFnpF9La3cpy2wTOuoORXu6HFcuQpTDuNFRrMcbzeyEWaHYiLzuhKX4_jzT89tZ71qpvTIsyNb0w3024-h4032-k-no.jpg";
import gardenDetail from "@/public/AHRPTWlj6L_jcdjaXKOmIA41CWnzfYgXSpc-t6sRq7gqe5WF107MKpKBuR-joJjWVy5d4cd-W_J9ZdiIIO7KsZsl15W6ZKINN1uEM45xYghQQBcF3dnKnMNeVeIx0F8_v0Jte_OrL-phw1296-h1728-k-no.jpg";
import resortView from "@/public/AHRPTWmWCXB6qHIn87CnlCmZ6QBo8svKCiStO1Hk9mbA-t0UZls7gdQ3itCSVrLKd9aC80OvFpN0VKKhz8jNM1E9yOGKhi5YwgdtqdMD5LOJBJwE55bmpIP4aBeJjKLro63jw081doy2Nww1728-h1296-k-no.jpg";
import retreatOne from "@/public/481147484_1164221358732079_7498504476839542649_n.jpg";
import retreatTwo from "@/public/481475222_1165254425295439_8548781345914421888_n.jpg";
import retreatThree from "@/public/488265115_1192070539280494_6775959288305692201_n.jpg";

export const MAPS_URL = "https://www.google.com/maps/place/Villa+Scarlet+Garden+Resort/@13.94959,120.6992248,17z/data=!3m1!4b1!4m6!3m5!1s0x33bdbdb1f4c7390f:0x6f93c14e99da1f1d!8m2!3d13.94959!4d120.6992248!16s%2Fg%2F11h3gh1_1f!18m1!1e1?entry=ttu";
export const FACEBOOK_URL = MAPS_URL;

export const images = {
  hero,
  story: gardenArrival,
  suite: retreatOne,
  villa: retreatTwo,
  dining: resortView,
  events: retreatThree,
  pool: gardenDetail,
  spa: resortView,
} as const;

export const stays = [
  { name: "Garden Retreat", detail: "A relaxed setting for family days and group getaways", image: images.suite },
  { name: "Resort Grounds", detail: "Space to gather, celebrate, and make memories together", image: images.villa },
] as const;

export const reviews = [
  ["A welcoming spot for a laid-back day with family and friends.", "Villa Scarlet Garden Resort guest"],
  ["The garden setting makes every gathering feel a little more special.", "Villa Scarlet Garden Resort guest"],
  ["A simple escape in Balayan for making time together count.", "Villa Scarlet Garden Resort guest"],
] as const;