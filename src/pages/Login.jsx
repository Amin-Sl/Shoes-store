import React from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-black shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={logo}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      به کفشینو خوش آمدید 
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">وارد حساب کاربری خود شوید .</p>
                      {/* <!--Username input--> */}
                      <input
                        type="text"
                        label="Username"
                        className="mb-4 px-2"
                        placeholder="نام کاربری"
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        type="password"
                        label="Password"
                        className="mb-4 px-2"
                        placeholder="رمز "
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <Link to="" >رمز را فراموش کرده اید ؟ </Link>
                        <button
                          className=" inline-block rounded border-2  px-6 pb-[6px] pt-2 text-xs font-normal uppercase leading-normal border-yellow-500  text-yellow-500  hover:bg-yellow-500 hover:text-black "
                          type="button"

                        >
                          ورود
                        </button>


                        {/* <!--Forgot password link--> */}

                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">حسابی ندارید ! </p>
                        <Link to="/register" >
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-yellow-500  px-6 pb-[6px] pt-2 text-xs font-normal uppercase leading-normal text-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-500 hover:text-black "
                          >
                            ثبت نام
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex bg-white items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"

                >
                  <div className="px-4 py-6 text-black md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      سادگی نامفهوم از صنعت چاپ و با استفاده
                    </h4>
                    <p className="text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
                      و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                      و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Login;
