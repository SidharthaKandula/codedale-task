export type Story = {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  button: string;
};

export const stories: Story[] = [
  {
    id: 1,
    type: "video",
    src: "/10756e213114aba50eb44269c201efc0be27f900.mp4",
    title: "Fundrise",
    description:
      "Helping marketers discover and execute their highest-performing campaigns.",
    button: "Read story",
  },
  {
    id: 2,
    type: "image",
    src: "/6dac22c832e6592a3b14cc0b0f0dec81f8a0eff6-1320x743.webp",
    title: "Warner Music",
    description:
      "Delivering personalized experiences across every customer touchpoint.",
    button: "Read story",
  },
  {
    id: 3,
    type: "video",
    src: "/10756e213114aba50eb44269c201efc0be27f900.mp4",
    title: "PetSmart",
    description:
      "Using AI-powered customer data to improve marketing performance.",
    button: "Read story",
  },
  {
    id: 4,
    type: "video",
    src: "/6a109c9915da1ea7c3f6d3166e4b6b98af0588bd.mp4",
    title: "Otrium",
    description:
      "Growing customer engagement with real-time personalization.",
    button: "Read story",
  },
  {
    id: 5,
    type: "image",
    src: "/0d7d05b7291909bfe92f4d5df79c9f717d98cc0e-1320x743.webp",
    title: "Ramp",
    description:
      "Connecting customer data with every marketing channel.",
    button: "Read story",
  },
];