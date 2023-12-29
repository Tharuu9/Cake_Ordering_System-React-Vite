import React from "react";
import Button from "../card/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
            <div className="flex flex-wrap justify-center">
                <div className="w-3/6 sm:w-4/8 px-1">
                    <img src={props.img}
                         alt="..." className="shadow rounded-full max-w-full h-full align-middle border-none"/>
                </div>
            </div>
            <div className=" flex flex-col items-center mt-5 gap-3">
                <h2 className=" font-semibold text-xl font-bold text-amber-950 italic">{props.title}</h2>
                <div className=" flex  text-amber-950 ">
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarHalf className=" text-brightColor" />
                </div>
                <h3 className=" font-semibold text-lg font-bold text-amber-950 italic" >{props.price}</h3>
                {/*<h3 className=" font-semibold text-lg" >$15.99</h3>*/}
                <div>
                    <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
            <FaRegPlusSquare size={20} />
          </span>
                </div>
                <!-- Input Number -->
                <div class="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                    <div class="flex items-center gap-x-1.5">
                        <button type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-decrement>
                            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                        </button>
                        <input class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" value="0" data-hs-input-number-input>
                            <button type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-increment>
                                <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                    </div>
                </div>


                <div className={'px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'}>
                    <button ><Link to={'/order'} >Order Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
