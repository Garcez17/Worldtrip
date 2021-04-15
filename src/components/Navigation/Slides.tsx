import { Box, Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide, } from 'swiper/react';
import Link from 'next/link';
import { Slide } from "./Slide";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Slides() {
  return (
    <Flex w="100%" height={[250, 450]} mb="20" mx="auto">
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
                img="/continents/europe.jpg" 
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
                description="A terra da oportunidade." 
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
                description="O mais ensolarado dos continentes." 
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
                description="Onde tudo começou." 
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
                description="As civilizações mais antigas." 
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
                description="O maior arquipélago do mundo." 
              />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}