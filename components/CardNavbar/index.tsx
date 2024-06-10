import React from "react";
import CardItem from "./CardItem";

const list = [
  {
    image: "/puydesancy.jpg",
    href: "/sky",
    title: "Cánh đồng xanh",
  },
  {
    image: "/MoThienKien/textured_output.jpg",
    href: "/mothienkien",
    title: "Mộ Thiên Kiện",
  },
  {
    image: "/milan.jpg",
    href: "/pannellum",
    title: "Milan",
  },
];
export default function CardNabar() {
  if (!list?.length) return null;
  return (
    <div className="absolute bottom-2 flex flex-row whitespace-nowrap gap-2 overflow-scroll z-[1000]">
      {list.map((o: any, i: number) => (
        <div className="w-[200px] h-[200px]">

        <CardItem key={i} item={o} />
        </div>
      ))}
    </div>
  );
}
