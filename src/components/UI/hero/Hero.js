import React from 'react';
import "../../../styles/hero.css"
import hero_shoes from "../../../assets/images/hero/shoes1.png"
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div class="hero flex relative z-20 items-center overflow-hidden">
            <div class="container mx-auto px-6 flex relative py-16">
                <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <h1 class="font-bebas-neue uppercase text-3xl sm:text-8xl font-black flex flex-col leading-none text-yellow-500">
                        متن لورم
                        <span class="text-5xl sm:text-7xl">
                            لورم
                        </span>
                    </h1>
                    <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                    </p>
                    <div class="flex mt-8 "  >
                        <a href="#" class="uppercase py-2 px-4 rounded-lg bg-yellow-500 border-2 border-transparent text-black text-md mr-4 hover:bg-white">
                            <Link to="/shoes">
                                خرید
                            </Link>
                        </a>
                        <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-yellow-500 text-white  text-md">
                            کاوش بیشتر
                        </a>
                    </div>
                </div>
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={hero_shoes} class="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>
    );
};

export default Hero;