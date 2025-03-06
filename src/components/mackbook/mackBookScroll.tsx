"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function MacbookScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden -mt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-6">
            All you need is a  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Digital Push
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Image/dm1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
