import React from "react";
import { Link } from "react-router-dom";
import Input from "./../components/input/input";
import Button from "../components/card/button";
import Card from "./../components/card/card";

function Order(): JSX.Element {
    return(
        <section className={'flex justify-center items-center p-5 bg-white'}>
            <div className={'w-fit p-10 border shadow-xl rounded-xl'}>
                <img src="/src/assets/logo.jpg" title="logo" alt="logo" className={'w-24 m-auto'}/>

                <div className={'text-2xl font-bold text-white text-center mt-5'}>
                    Order Now
                </div>

                <div className={'mt-5 min-w-[400px]'}>

                    <div className={'flex' }>

                        <Input
                            type={'text'}
                            name={'name'}
                            label={'Name'}
                            placeholder={'Enter your name:'}
                            optional={false}/>

                    </div>

                    <Input
                        type={'text'}
                        name={'phone number'}
                        label={'Phone number'}
                        placeholder={'Phone Number:'}
                        optional={false}/>

                    <Input
                        type={'address'}
                        name={'address'}
                        label={'Address'}
                        placeholder={'Enter your Address:'}
                        optional={false}/>

                    <Input
                        type={'email'}
                        name={'email'}
                        label={'Email'}
                        placeholder={'Enter your Email:'}
                        optional={false}/>
                </div>

                <div className={'text-center mt-5 bg-black'}>
                    <button className={'main-btn bg-black'}>Order</button>
                </div>


            </div>
        </section>
    );
}

export default Order;
