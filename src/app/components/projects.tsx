"use client";

import ProjectCard from "./projectsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Project() {
  return (
    <section>
      <div className="flex w-full flex-col items-center gap-20 lg:h-[550px]">
        <div className="w-full">
          <h1 className="IBM_Play_Sans text-center text-[80px] font-extrabold text-[#F7F197] lg:text-left">
            Projects
          </h1>
          <p className="IBM_Play_Sans text-center text-[20px] lg:text-left">
          I have worked on several exciting projects, showcasing my skills and creativity in web development. Here are a few highlights of what I&apos;ve accomplished
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 1500, // Time in milliseconds between slides (3000ms = 3 seconds)
            disableOnInteraction: true, // Keeps autoplay active even after user interactions
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Link href='https://milestone4-editable-resume-one.vercel.app/'>
            <ProjectCard
              imageSrc="/images/resume.png"
              title="Weather App"
              description=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://weather-app-hazel-sigma.vercel.app/'>
            <ProjectCard
              imageSrc="/images/weather_app.png"
              title="Weather App"
              description=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://countdowntimerr.vercel.app/'>
            <ProjectCard
              imageSrc="/images/countDownTimer.png"
              title="CountDown Timer"
              description=""
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              imageSrc="/images/birthdayWish.png"
              title="Birthday Wish App"
              description=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
