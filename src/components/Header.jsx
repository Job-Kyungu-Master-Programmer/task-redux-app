import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import io from '../assets/react.svg'

const Header = () => {
  return (
    <div className="header">
       <div className="header__container">
           <div className="header__names">
              <h1 className="header__name">Jeancy Dalos</h1>
               <h4 className="header__skill">IG. logiciel</h4>
           </div>
           <div className="header__user">
               <div className="header__image">
                  <img src={io} alt="" className="header__img" />
               </div>
               <button className="header__logout">
                  <IoIosLogOut />
               </button>
           </div>
       </div>
    </div>
  )
}

export default Header   