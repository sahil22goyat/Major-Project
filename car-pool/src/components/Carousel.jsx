"use client";
import React, { useEffect, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import autoplay from "embla-carousel-autoplay";
import { profile } from "@/contents/appdata";
import { Card, CardContent } from "@/components/ui/card";

// Lazy Load images
const LazyImage = ({ src, ...props }) => (
  <img src={src} loading="lazy" {...props} />
);

const Carousels = () => {
  const carouselItems = useMemo(() => {
    return profile?.map((slide, index) => (
      <CarouselItem
        key={index}
        style={{ backgroundImage: `url(${slide.img})` }}
        className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-60"></div>
        <div className="">
          <Card className="bg-transparent border-none">
            <CardContent className="flex items-center justify-center p-6">
              <div className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative">
                <h3 className="mb-4 text-3xl lg:text-6xl font-bold text-white leading-tight font-serif">
                  {slide.name}
                </h3>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold text-center w-10/12 md:w-8/12">
                  <i className={"fad fa-" + slide.icon}></i>
                  <span className="ml-2">{slide.text}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ));
  }, [profile]);

  return (
    <div>
      <Carousel
        plugins={[
          autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousels;
