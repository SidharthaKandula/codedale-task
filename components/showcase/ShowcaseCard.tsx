"use client";
import PanelDeck from "./PanelDeck";
import Image from "next/image";
import { motion } from "framer-motion";
import PanelScroller from "./PanelScroller";
import { ShowcaseItem } from "./types";

interface Props {
  item: ShowcaseItem;
  active: boolean;
  onHover: () => void;
}

export default function ShowcaseCard({
  item,
  active,
  onHover,
}: Props) {
  return (
    <motion.div
  onMouseEnter={onHover}
  animate={{
    scale: active ? 1 : 0.9,
    opacity: active ? 1 : 0.5,
  }}
  transition={{ duration: 0.5 }}
>
  <Image
    src={item.image}
    alt={item.title}
    width={430}
    height={560}
    className="rounded-[36px]"
  />

  <PanelDeck panels={item.panels} />
</motion.div>
  );
}