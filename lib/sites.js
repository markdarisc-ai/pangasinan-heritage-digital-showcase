export const sites = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands',
    location: 'Alaminos City, Pangasinan',
    category: 'Nature & Adventure',
    intro: 'A signature coastal attraction known for its cluster of islands, clear waters, and island-hopping experiences.',
    highlights: ['Island hopping', 'Kayaking', 'Scenic viewpoints'],
    fact: 'The Hundred Islands is one of Pangasinan\'s best-known tourism destinations and a strong visual centerpiece for a digital heritage showcase.',
    accent: 'ocean',
    icon: 'islands',
  },
  {
    slug: 'bolinao-lighthouse',
    name: 'Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    category: 'Heritage Landmark',
    intro: 'A historic coastal landmark overlooking the West Philippine Sea, offering a strong sense of place and history.',
    highlights: ['Coastal views', 'Heritage structure', 'Sunset viewing'],
    fact: 'The lighthouse is a recognizable landmark of Bolinao and works well as the showcase\'s heritage-focused destination.',
    accent: 'sunset',
    icon: 'lighthouse',
  },
  {
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    location: 'Balungao, Pangasinan',
    category: 'Wellness & Nature',
    intro: 'A nature destination centered on warm spring waters and an outdoor setting that invites relaxation and exploration.',
    highlights: ['Hot spring pools', 'Mountain scenery', 'Relaxation'],
    fact: 'Balungao\'s hot spring experience adds a wellness and nature dimension to the province\'s tourism story.',
    accent: 'forest',
    icon: 'spring',
  },
];

export function getSiteBySlug(slug) {
  return sites.find((site) => site.slug === slug);
}
