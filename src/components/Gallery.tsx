"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
import "swiper/css";

import Card from "@/components/Card";

type GalleryProps = { data: { title: string; image: string }[] };

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ title, image }) => (
          <SwiperSlide key={title}>
            <Card title={title} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
