"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="text-content">
              <h1 className="typewriter-text">
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
              <p className="description">
                <span className="developer-highlight">developer</span> based in Karachi
              </p>
            </div>
            <Link href="https://linkedin.com/in/noman-shahnawaz-545077228" target="_blank">
              <button className="contact-button">lets talk with me</button>
            </Link>
          </div>
          <div className="profile-image-container">
            <Image
              src="/images/profile.jpg"
              alt="Profile Image"
              width={500}
              height={300}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
