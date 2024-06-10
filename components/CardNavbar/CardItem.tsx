import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function CardItem({ item }: { item?: any }) {
  return (
    <Link href={item?.href}>
      <Card isFooterBlurred radius="lg"
        className='w-full h-full border-none flex justify-center'
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src={item?.image}
          width={200}
          height={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{item?.title}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Ghé thăm
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
