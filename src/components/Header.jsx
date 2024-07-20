import React from 'react'
import logo from "../images/logo.jpg"
import aaa from "../images/aaa.jpg"
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";



function Header() {
    return (
        <div className='header container'>
            <div className="header__top">
                <div className="header__top-info">
                    <h3 className="header__top-info_title">Anarboyev Asadbek</h3>
                    <p className="header__top-info_text">
                        Asalomu aleykum,man web dasturlash boyicha front end dasturchiman,
                        pastda korsatib otilgan ish qurolari yordamida sayt yarataman,proweb
                        oquv markazini frond end kursini tugatganman,yaratgan saytlarimni
                        saytni pastki qismida korsangiz boladi.
                    </p>
                </div>
                <img src={aaa} alt="photo" className='header__top-img' />
            </div>
            <div className="header__bottom">
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target='_blank'><FaReact />  <span>REACT</span></a>
                <a href="https://en.wikipedia.org/wiki/GitHub" target='_blank'><FaGithub />  <span>GITHUB</span></a>
                <a href="https://ru.wikipedia.org/wiki/Sass" target='_blank'><BsFiletypeScss />  <span>SCSS</span></a>
                <a href="https://ru.wikipedia.org/wiki/JavaScript"target='_blank'><IoLogoJavascript />  <span>JAVASCRIPT</span></a>
                <a href="https://ru.wikipedia.org/wiki/Redux" target='_blank'><SiRedux /><span>  </span>REDUX</a>
            </div>
        </div>
    )
}

export default Header