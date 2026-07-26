export interface CarouselItem {
  id: number;
  logo: string;
  title: string;
  description: string;
  background: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    logo: "/show/g2-leader.webp",
    title: "Fundrise",
    description:
      "Helping marketers discover their highest-performing campaigns using AI.",
    background: "/show/industry-leader-bg.webp",
  },
  {
    id: 2,
    logo: "/show/forbes.webp",
    title: "Warner Music",
    description:
      "Deliver personalized experiences across every customer touchpoint.",
    background: "/show/industry-leader-bg.webp",
  },
  {
    id: 3,
    logo: "/show/fivetran.webp",
    title: "PetSmart",
    description:
      "AI-powered customer insights for better campaign performance.",
    background: "/show/industry-leader-bg.webp",
  },
  {
    id: 4,
    logo: "/show/redpoint.webp",
    title: "Otrium",
    description:
      "Create real-time personalized marketing with customer data.",
    background: "/show/industry-leader-bg.webp",
  },
  {
    id: 5,
    logo: "/show/retail-tech.webp",
    title: "Ramp",
    description:
      "Connect customer data across every marketing channel.",
    background: "/show/industry-leader-bg.webp",
  },
  {
    id: 6,
    logo: "/show/snowflake.webp",
    title: "WeightWatchers",
    description:
      "Increase customer engagement through intelligent segmentation.",
    background: "/show/industry-leader-bg.webp",
  },
];