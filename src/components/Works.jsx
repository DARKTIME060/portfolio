import React from 'react'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'
import work4 from '../images/work4.png'

function Works() {
    return (
        <div className='works container'>
            <div className="works__info">
                <h3 className="works__info-title">Men yaratgan saytlar</h3>
                <p className="works__info-text">
                    Men bu saytlarni react,js,scss va turli xil ish qurolari yordamida yaratganman !
                </p>
            </div>
            <div className="works__box">
                <div className="works__box-info">
                    <h3 className="works__box-title">Work name here</h3>
                    <p className="works__box-text">
                        Siz bu saytda ozingizga yoqan yoki mashhur bolgan kino,serial,multfilmlarni topishingiz mumkun va ular haqida malumot olishingiz mumkun
                    </p>
                    <button className="works__box-button"><a href="https://ciniphile0.netlify.app/" target='_blank'>Saytga o'tish</a></button>
                </div>
                <img src={work1} alt="qwer" className='works__box-image' />
            </div>
            <div className="works__box">
                <img src={work2} alt="qwer" className='works__box-image' />
                <div className="works__box-info">
                    <h3 className="works__box-title">Todolist</h3>
                    <p className="works__box-text">
                        Siz mening ushbu saytimda oziz uchun harid qilmoqchi bolgan narsalaringizni ro'yhatini tuzsangiz boladi va harid qilingan narsalarni belgilab qoyishingiz mumkun,saytdagi malumotlar localstorage yaniy qurilmangizga saqlanadi va malumot yoqotilmaydi
                    </p>
                    <button className="works__box-button"><a href="https://todoslist69dt.netlify.app/" target='_blank'>Saytga o'tish</a></button>
                </div>
            </div>
            <div className="works__box">
                <div className="works__box-info">
                    <h3 className="works__box-title">Weather</h3>
                    <p className="works__box-text">
                        Siz bu sayt yordamida istalgan shaharingizdagi obhavoni korishingiz mumkun va boshqa malumotlarni korishingiz mumkun !
                    </p>
                    <button className="works__box-button"><a href="https://weatherdarktime.netlify.app/" target='_blank'>Saytga o'tish</a></button>
                </div>
                <img src={work3} alt="qwer" className='works__box-image' />
            </div>
            <div className="works__box">
                <img src={work4} alt="qwer" className='works__box-image' />
                <div className="works__box-info">
                    <h3 className="works__box-title">Weather</h3>
                    <p className="works__box-text">
                    Siz bu sayt yordamida istalgan shaharingizdagi obhavoni korishingiz mumkun va boshqa malumotlarni korishingiz mumkun !
                    </p>
                    <button className="works__box-button"><a href="https://weatherdt.netlify.app/" target='_blank'>Saytga o'tish</a></button>
                </div>

            </div>
        </div>
    )
}

export default Works