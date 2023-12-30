import React from "react";
import { Link } from "react-router-dom";
import Input from "./../components/input/input";

function Signup(): JSX.Element {
    return(
      <section className={'flex justify-center items-center p-5 bg-pink-100'}>
        <div className={'w-fit p-10 border shadow-xl rounded-xl bg-white'}>

          <img src="/src/assets/logo.jpg" title="logo" alt="logo" className={'w-24 m-auto'}/>

          <div className={'text-2xl font-bold text-black text-center mt-5'}>
            Sign Up
          </div>

          <div className={'mt-5 min-w-[400px] font-bold text-black'}>

            <div className={'flex' }>

              <Input
                type={'text'}
                name={'name'}
                label={'First Name'}
                placeholder={'Enter your first name:'}
                optional={false}/>

              <Input
                type={'text'}
                name={'lname'}
                label={'Last Name'}
                placeholder={'Enter your last name:'}
                optional={false}/>

            </div>

            <Input
              type={'text'}
              name={'username'}
              label={'Username'}
              placeholder={'Enter your username:'}
              optional={false}/>

            <Input
              type={'email'}
              name={'email'}
              label={'Email'}
              placeholder={'Enter your email:'}
              optional={false}/>

            <Input
              type={'password'}
              name={'password'}
              label={'Password'}
              placeholder={'Enter your password:'}
              optional={false}/>
          </div>

          <div className={'text-center mt-5 text-white font-bold'}>
            <button className={'main-btn '}>Sign Up</button>
          </div>

          <div className={'text-center mt-5 font-bold'}>
            Do not have an account? <Link to={'/signin'}><span className={'italic underline'}>Sign In now</span></Link>
          </div>
        </div>
      </section>
    );
}

export default Signup;