"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export default function hero() {
  return (
    <section className="py-14">
      <div className="container w-full">
        <div className="flex w-full lg:flex-row items-center lg:justify-between flex-col-reverse">
          <div className="flex lg:h-[538px] lg:w-[597px] w-full h-[200px] flex-col lg:justify-between justify-around lg:items-start items-center">
            <div className="flex lg:w-full lg:h-[326px] w-[300px] flex-col justify-between">
              <h1 className="IBM_Plex_Sans h-[50px] lg:auto lg:pr-[51px] lg:text-[72px] text-[24px] lg:text-left text-center uppercase leading-none">
                <Typewriter
                  options={{
                    strings: [
                      "my name is <span style='font-weight:bold; color:#03045E;'>noman shahnawaz</span>",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="IBM_Play_Sans lg:text-[24px] text-base lg:text-left text-center">
                <span className="font-bold italic">developer</span> based in
                Karachi
              </p>
            </div>
            <Link href='https://linkedin.com/in/noman-shahnawaz-545077228' target="_blank">
            <button className="IBM_Play_Sans h-[56px] w-[258px] bg-[#F5EE84] text-white hover:text-black hover:font-bold">
              lets talk with me
            </button>
            </Link>
          </div>
          <div className="lg:h-[750px] lg:w-[660px] lg:flex items-center justify-center">
            <Image
            src="/images/profile.jpg" 
            alt="Profile Image" 
            width={500} 
            height={300} 
            className="rounded-full">

            </Image>
          </div>
        </div>
      </div>
    </section>
  );
}
