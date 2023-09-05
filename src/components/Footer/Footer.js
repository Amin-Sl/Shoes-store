import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram , AiFillGithub} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="bg-black py-4 text-gray-300">
                    <div className="container px-4 mx-auto">
                        <div className="-mx-4 flex flex-wrap justify-between">
                            <div className="px-4 my-4 w-full xl:w-1/5">
                                <h2 className=' inline-block text-2xl pb-4 mb-4 border-b-4 text-white border-yellow-500 '>کفشینو</h2>
                                <p className="text-justify">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
                                    و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .
                                </p>
                            </div>

                            <div className="px-4 my-4 w-full sm:w-auto">
                                <div>
                                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 text-gray-100 border-yellow-500">شرکت</h2>
                                </div>
                                <ul className="leading-8">
                                    <Link className='hover:text-yellow-500' to="/" > <li>درباره ما</li>  </Link>
                                    <Link className='hover:text-yellow-500' to="/" > <li>خدمات </li> </Link>
                                    <Link className='hover:text-yellow-500' to="/" > <li>حریم خصوصی</li> </Link>
                                    <Link className='hover:text-yellow-500' to="/" > <li>ارتباط با ما</li> </Link>
                                </ul>
                            </div>
                            <div className="px-4 my-4 w-full sm:w-auto">
                                <div>
                                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 text-gray-100 border-yellow-500">بلاگ</h2>
                                </div>
                                <ul className="leading-8  ">
                                    <Link to="/" className='hover:text-yellow-500' >  <li>تولیدی</li>  </Link>
                                    <Link to="/" className='hover:text-yellow-500' >  <li>تضمین کیفیت </li> </Link>
                                    <Link to="/" className='hover:text-yellow-500' >  <li>درباره ما</li> </Link>
                                    <Link to="/" className='hover:text-yellow-500' >  <li>رضایت مشتزی</li> </Link>

                                </ul>
                            </div>
                            <div className="  px-4 my-4 w-full sm:w-auto xl:w-1/5">
                                <div>
                                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 text-gray-100 border-yellow-500">ارتباط با ما</h2>
                                </div>
                                <div className='flex px-2 py-2 text-2xl' >
                                    <Link to="/" className='flex flex-initial hover:text-yellow-500 ' ><AiOutlineTwitter /> </Link>
                                    <Link to="/" className='flex flex-initial hover:text-yellow-500 ' ><AiFillYoutube /> </Link>
                                    <Link to="/" className='flex flex-initial hover:text-yellow-500 ' ><AiFillInstagram /> </Link>
                                    <Link to="/" className='flex flex-initial hover:text-yellow-500 ' ><BsTelegram /> </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-black py-4 text-yellow-500 ">
                            <div class="text-base sm:w-auto flex justify-between px-56 max-sm:px-7 max-sm:block text-white" >
                                <p className='flex'>developer: Amin-sl</p>
                                <a href="https://github.com/Amin-Sl"><div className='flex text-left'><span>github</span><span className='pt-1'><AiFillGithub/></span></div></a>
                                <p className='flex  ml-6'>Aminsalimi8102@gmail.com</p>  
                                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;