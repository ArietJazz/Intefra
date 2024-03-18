import React from 'react';
import man from '../../assets/image/photo_2024-03-11_21-26-58.jpg'
import women from '../../assets/image/photo_2024-03-11_21-27-22.jpg'

const Intro = () => {
    return (
        <section className="intro mt-12">
            <div className="intro__block flex">
                <div className="intro__block-men bg-cover bg-center w-1/2 h-96 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${man})` }}>
                    <h3 className="intro__block-men-title text-white text-4xl">МУЖСКОЕ</h3>
                    <span className="intro__block-men-line w-48 h-0.5 bg-white"></span>
                </div>
                <div className="intro__block-women bg-cover bg-center w-1/2 h-96 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${women})` }}>
                    <h3 className="intro__block-women-title text-white text-4xl">ЖЕНСКОЕ</h3>
                    <span className="intro__block-women-line w-48 h-0.5 bg-white"></span>
                </div>
            </div>
        </section>
    );
}

export default Intro;
