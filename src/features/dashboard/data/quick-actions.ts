export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
}

export const quickActions: QuickAction[] = [
  {
    title: "Narrate a story",
    description: "Bring character to life with expressive AI narration",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=In an emerald forest, Pip the squirrel found a fallen Wish-Star. It hummed with warm melodies. Pips friends laughed loudly, their joy lifting the star back to the velvet sky. It winked from above, a golden thank-you. Pip smiled, knowing even the smallest creature can spark the biggest magic.",
  },
  {
    title: "Ocean Echoes",
    description:
      "Immerse listeners in deep-sea mysteries with rhythmic AI voices",
    gradient: "from-blue-600 to-cyan-300",
    href: "/text-to-speech?text=Marina the mermaid found a glowing pearl in the silent kelp forest. When she hummed, the pearl mirrored the tides, pulsing with the ocean's heartbeat. Her song called the dolphins home, proving that one small voice can harmonize the vast, wild sea.",
  },
  {
    title: "Midnight Gale",
    description:
      "Capture the intensity of a storm with powerful dramatic narration",
    gradient: "from-purple-900 to-indigo-500",
    href: "/text-to-speech?text=Kael the wind-spirit danced through a thunderstorm, chasing jagged lightning bolts. He woven the static into a cloak of silver sparks. As the rain fell, he calmed the sky into a gentle mist, showing that even the fiercest storm holds a kernel of peace.",
  },
  {
    title: "Golden Harvest",
    description:
      "Warm, cozy narration perfect for tales of growth and kindness",
    gradient: "from-orange-400 to-yellow-100",
    href: "/text-to-speech?text=Oliver the owl guarded the last sunflower of autumn. Its petals held the warmth of the summer sun. He shared its seeds with the hungry sparrows, and by spring, the entire meadow bloomed in gold. A single act of sharing turned a lonely field into a paradise.",
  },
  {
    title: "Starlight Voyage",
    description:
      "Take flight into the cosmos with ethereal and airy vocal tones",
    gradient: "from-slate-900 to-fuchsia-900",
    href: "/text-to-speech?text=Nova the space-cat leaped between passing comets. She collected stardust in her whiskers to light the path for lost explorers. Her trail became a new constellation, guiding travelers home. She taught the galaxy that kindness is the brightest light in the dark.",
  },
  {
    title: "Desert Bloom",
    description:
      "Ground your stories with steady, earthy, and resilient AI narration",
    gradient: "from-amber-600 to-red-400",
    href: "/text-to-speech?text=Sami the sand-fox discovered a hidden spring beneath the dunes. He didn't keep the water for himself; he whistled to the thirsty cacti. Soon, the desert floor turned into a garden of vibrant red lilies. Resilience and generosity made the dry sands sing.",
  },
];


