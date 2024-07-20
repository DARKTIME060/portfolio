import React from 'react'

function Footer() {
    return (
        <div className='footer container'>
            <div className="footer__info">
                <h3 className="footer__info-title">
                    Bog'lanish
                </h3>
                <p className="footer__info-text">
                 Siz bu yerda menga habar qoldirsangiz boladi !
                </p>
            </div>
            <div className="footer__send">
                <div className="footer__email">
                    <p>Email</p>
                    <input type="text" placeholder='iltimos emailingizni kiriting' />
                </div>
                <div className="footer__mobile">
                    <p>Mobile</p>
                    <input type="text" placeholder='iltimos telefon raqmingizni kriting' />
                </div>
                <div className="footer__massage">
                    <p>Massage</p>
                    <input type="text" placeholder='Savolingizni yozing'/>
                </div>
                <button className="footer__button">
                    Yuborish
                </button>
            </div>
            <div className="footer__bottom">
                <p>Made with Asadbek</p>
            </div>
        </div>
    )
}

export default Footer