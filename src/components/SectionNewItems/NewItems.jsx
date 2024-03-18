import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import item1 from '../../assets/image/newsItem1.png';
import item2 from '../../assets/image/newsItem2.png';
import item3 from '../../assets/image/newsItem3.png';

const NewItems = () => {
    return (
        <>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-3xl">НОВИНКИ</h2>
                    <p className="text-sm text-gray-500 mb-4 text-center">643 ОБНОВЛЕНИЙ</p>
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
                            <img src={item1} alt="Slide 1" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item2} alt="Slide 2" className="w-full h-auto"/>
                            <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item3} alt="Slide 3" className="w-full h-auto"/>
                            <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} alt="Slide 4" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} alt="Slide 5" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>

                    </Swiper>

                </div>
                <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto">СМОТРЕТЬ
                    БОЛЬШЕ</p>
            </section>
        </>
    );
};

export default NewItems;
