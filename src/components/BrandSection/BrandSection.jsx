import React from 'react';
import brand1 from '../../assets/image/brandOne.png'
import brand2 from '../../assets/image/brand-two.png'
import brand3 from '../../assets/image/brand-three.png'
import brand4 from '../../assets/image/brand-four.png'
import brand5 from '../../assets/image/brand-five.png'
import brand6 from '../../assets/image/brand-six.png'

const BrandSection = () => {
    return (
        <section className="brand py-12 text-center">
            <div className="container">
                <h2 className="text-3xl font-semibold">ТОП-БРЕНДЫ</h2>
                <div className="brand__block flex justify-center items-center mt-8">
                    <div className="brand__block-box px-2 border-solid border-r border-gray">
                        <img src={brand1} alt="" className="max-w-full h-auto" />
                    </div>
                    <div className="brand__block-box px-2 border-solid border-r border-gray">
                        <img src={brand2} alt="" className="max-w-full h-auto"/>
                    </div>
                    <div className="brand__block-box px-2 border-solid border-r border-gray">
                        <img src={brand3} alt="" className="max-w-full h-auto" />
                    </div>
                    <div className="brand__block-box px-2 border-solid border-r border-gray">
                        <img src={brand4} alt="" className="max-w-full h-auto" />
                    </div>
                    <div className="brand__block-box px-2 border-solid border-r border-gray">
                        <img src={brand5} alt="" className="max-w-full h-auto"/>
                    </div>
                    <div className="brand__block-box px-2">
                        <img src={brand6} alt="" className="max-w-full h-auto"/>
                    </div>
                </div>
                <div className="brand__all mt-8">
                    <p className="text-base font-semibold uppercase">ВСЕ БРЕНДЫ</p>
                    <img src="./src/images/Line%2017.png" alt="" className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
}

export default BrandSection;
