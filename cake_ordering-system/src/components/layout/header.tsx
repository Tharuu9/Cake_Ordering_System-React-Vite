import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../card/button";

class Header extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <header>
        <nav className={'flex justify-between items-center bg-white-100 p-5 font-bold text-amber-950 italic'}>
          <img src="/src/assets/logo.jpg" title="logo" alt="logo" className={'w-[50px]'}/>
          <ul className={'flex gap-[4vw] font-bold text-amber-950'}>
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/AboutPage'}>ABOUT US</Link></li>
            <li><Link to={'/menu'}>MENU</Link></li>
            <li><Link to={'/review'} >REVIEW</Link></li>
            <li className={'border-yellow-950'}><Link to={'/signin'} >LOGIN</Link></li>
            <li className={'border-yellow-950'}><Link to={'/order'} >ORDER NOW</Link></li>

          </ul>
        </nav>
      </header>
    );
  }

}

export default Header;