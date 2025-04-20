import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {words} from "../../constants";
import {AnimatedCounter, Button, HeroExperience} from "../../components";


export const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center px-5 md:w-full w-screen md:px-20">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, i:number) => (
                                            <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                                                    <img
                                                        className="size-7 p-1 rounded-full bg-white-50 xl:size-12 md:size-10 md:p-2"
                                                        src={word.imgPath}
                                                        alt={word.text}
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 relative z-10 pointer-events-none md:text-xl">
                            Hi, I'm Valentin, a developer based in Ukrain with a passion for code.
                        </p>
                        <Button
                            id="button"
                            text="See my Work"
                            className="md:80 md:h-16 w-60"
                        />
                    </div>
                </header>
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
};