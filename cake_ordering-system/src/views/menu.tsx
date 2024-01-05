import React from 'react';
import Card from "./../components/card/card";
import img1 from "../assets/menu1.jpg";
import img2 from "../assets/menu2.jpg";
import img3 from "../assets/menu3.jpg";
import img4 from "../assets/menu4.jpg";
import img5 from "../assets/menu5.jpg";
import img6 from "../assets/menu6.jpg";

// const Menu = () => {
function  Menu():JSX.Element {
        return (

            <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5  bg-white font-bold text-black italic">
                <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
                    Our Exclusive Products
                </h1>

                <div className=" flex flex-wrap pb-6 gap-6 justify-center font-bold text-black italic ">
                    <Card img={img1} title="Chocolate Cake" price="Rs:5500"/>
                    <Card img={img2} title="Brownies With Chocolate Cake" price="Rs:2800" />
                    <Card img={img3} title="Cheese Cake" price="Rs:3200" />
                    <Card img={img4} title="Red Velvet Cake" price="Rs:2750"  />
                    <Card img={img5} title="Cashewnuts Cake" price="Rs:2500"  />
                    <Card img={img6} title="Strawberry Cake" price="Rs:4000"  />
                </div>
            </div>

        );

}

export default Menu;