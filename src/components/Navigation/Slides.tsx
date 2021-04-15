import { Box, Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide, } from 'swiper/react';
import Link from 'next/link';
import { Slide } from "./Slide";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Slides() {
  return (
    <Flex maxWidth={1240} height={450} mb="20" mx="auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, type: "bullets" }}
        parallax={true}
        loop
        autoplay={{
          delay: 5000,
        }}
      >
        <Box className="swiper-button-prev" color="yellow.500" />
        <Box className="swiper-button-next" color="yellow.500" />

        <SwiperSlide>
          <Link href="/europe">
            <a>
              <Slide 
                img="/continents/europe.png" 
                title="Europa" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/northamerica">
            <a>
              <Slide 
                img="/continents/northamerica.jpg" 
                title="América do Norte" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/southamerica">
            <a>
              <Slide 
                img="/continents/southamerica.jpg" 
                title="América do Sul" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/africa">
            <a>
              <Slide 
                img="/continents/africa.jpg" 
                title="Africa" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/asia">
            <a>
              <Slide 
                img="/continents/asia.jpg" 
                title="Ásia" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link href="/oceania">
            <a>
              <Slide 
                img="/continents/oceania.jpg" 
                title="Ocêania" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}