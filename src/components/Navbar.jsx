import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../images/logo.jpg"
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [scrollPositions, setScrollPositions] = useState({
    target1: 1,
    target2: 1800,
    target3: 3700,
  });

  const target1Ref = useRef(null);
  const target2Ref = useRef(null);
  const target3Ref = useRef(null);

  const handleScroll = (targetRef, scrollPosition) => {
    targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPositions.target1 && !target1Ref.current.classList.contains('active')) {
        target1Ref.current.classList.add('active');
      } else if (currentScroll <= scrollPositions.target1 && target1Ref.current.classList.contains('active')) {
        target1Ref.current.classList.remove('active');
      }

      if (currentScroll > scrollPositions.target2 && !target2Ref.current.classList.contains('active')) {
        target2Ref.current.classList.add('active');
      } else if (currentScroll <= scrollPositions.target2 && target2Ref.current.classList.contains('active')) {
        target2Ref.current.classList.remove('active');
      }

      if (currentScroll > scrollPositions.target3 && !target3Ref.current.classList.contains('active')) {
        target3Ref.current.classList.add('active');
      } else if (currentScroll <= scrollPositions.target3 && target3Ref.current.classList.contains('active')) {
        target3Ref.current.classList.remove('active');
      }
    });
    return () => window.removeEventListener('scroll', () => { });
  }, []);
  return (
    <div className="navbar container">
      <img src={logo} alt="logo" href="#" />
      <div className="navbar__list">
        <a className="navbar__list-link" onClick={() => handleScroll(target1Ref, scrollPositions.target1 + 'px')}>Bosh sahifa</a>
        <a className="navbar__list-link" onClick={() => handleScroll(target2Ref, scrollPositions.target2 + 'px')}>Mening proyektlarim</a>
        <a className="navbar__list-link" onClick={() => handleScroll(target3Ref, scrollPositions.target3 + 'px')}>Bog'lanish</a>
      </div>
      <div className="navbar__contacts">
        <a rel="stylesheet" href="https://t.me/hacker_pro_yt_1" ><FaTelegram /></a>
        <a rel="stylesheet" href="https://www.instagram.com/hacker_pro_yt_1" ><FaInstagram /></a>
        <a rel="stylesheet" href="https://github.com/DARKTIME060" ><FaGithub /></a>
      </div>
      <div className="scroll" ref={target2Ref} id="target2" style={{ marginTop: scrollPositions.target2 + 'px' }}></div>
      <div className="scroll" ref={target3Ref} id="target3" style={{ marginTop: scrollPositions.target3 + 'px' }}></div>
      <div className="scroll" ref={target1Ref} id="target1" style={{ marginTop: scrollPositions.target1 + 'px' }}></div>
    </div>
  )
}

export default Navbar