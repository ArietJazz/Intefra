import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import item1 from '../../assets/image/newsItem1.png';
import item2 from '../../assets/image/newsItem2.png';
import item3 from '../../assets/image/newsItem3.png';
import {background} from "@chakra-ui/react";

const NewItemsDiscount = () => {
    return (
        <>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{ color: 'red' }}>СКИДКИ</h2>
                    <Swiper
                        spaceBetween={35}
                        slidesPerView={4}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div >
                                <img src={item1} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">Saint Laurent</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item2} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item3} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item1} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">Saint Laurent</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item2} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div >
                            <img src={item3} alt="Slide 1" className="w-full h-auto relative"/>
                            <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-6 text-2xl" style={{background:"red"}}>-70%</div>
                            <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                            <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                        </div>
                    </SwiperSlide>


                    </Swiper>

                </div>
                <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto">СМОТРЕТЬ
                    БОЛЬШЕ</p>
            </section>
        </>
    );
};

export default NewItemsDiscount;
