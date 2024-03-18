import React from 'react';
import rouge from "../../assets/image/rouge.png";
import rosso from "../../assets/image/rosse.png";

const PerfumeSection = () => {
    return (
        <section className="perfume mt-10 relative">
            <div className="perfume__block flex relative">
                <div className="perfume__block-rouge bg-cover bg-center w-full h-80 flex flex-col justify-end pr-8 text-right" style={{ backgroundImage: `url(${rouge})` }}>
                    <div className="perfume__block-text-block">
                        <p className="perfume__block-title text-white text-4xl font-semibold">Maison <br /> Francis Kurkdjian <br /> Baccarat Rouge 540</p>
                        <a href="#" className="perfume__block-look text-white text-lg font-semibold">СМОТРЕТЬ</a>
                    </div>
                </div>
                <button className="perfume__block-button-rouge absolute top-4 left-1/2 border border-white rounded-full px-6 py-2 text-white font-semibold">ЗАПАХ МЕСЯЦА</button>
                <div className="perfume__block-rosso bg-cover bg-center w-full h-80 flex flex-col justify-end pl-8 text-left" style={{ backgroundImage: `url(${rosso})` }}>
                    <div className="perfume__block-text-block">
                        <p className="perfume__block-title text-white text-4xl font-semibold">Dr.Vranjes <br /> Rosso Nibile</p>
                        <a href="#" className="perfume__block-look text-white text-lg font-semibold">СМОТРЕТЬ</a>
                    </div>
                </div>

                <button className="perfume__block-button-rosso absolute top-4 right-1/2 border border-white rounded-full px-6 py-2 text-white font-semibold ">ПАРФЮМ</button>

            </div>
        </section>
    );
};

export default PerfumeSection;
