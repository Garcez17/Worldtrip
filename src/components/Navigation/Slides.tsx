import { Flex } from "@chakra-ui/react";
import SwiperCore, { EffectFade } from 'swiper'
import { Swiper, SwiperSlide, } from 'swiper/react';
import Link from 'next/link';
import { Slide } from "./Slide";

SwiperCore.use([EffectFade]);

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
        scrollbar={{ draggable: true }}
        parallax={true}
        loop
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <Link href="/continentes/europe">
            <a>
              <Slide 
                img="/europe.png" 
                title="Europa" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/continentes/northamerica">
            <a>
              <Slide 
                img="/america.jpg" 
                title="América do Norte" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/continentes/southamerica">
            <a>
              <Slide 
                img="/southamerica.jpg" 
                title="América do Sul" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/continentes/africa">
            <a>
              <Slide 
                img="/africa.jpg" 
                title="Africa" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/continentes/asia">
            <a>
              <Slide 
                img="/asia.jpg" 
                title="Ásia" 
                description="O continente mais antigo." 
              />
            </a>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link href="/continentes/oceania">
            <a>
              <Slide 
                img="/oceania.jpg" 
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