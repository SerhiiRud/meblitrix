"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import Card from "@/components/Card";

type GalleryProps = { data: { title: string; image: string }[] };

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        loop={true}
        zoom={true}
        spaceBetween={50}
        slidesPerView={3}
        autoHeight={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {data.map(({ title, image }) => (
          <SwiperSlide key={title} className="">
            <div className="swiper-zoom-container z-50">
              <Card title={title} image={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
