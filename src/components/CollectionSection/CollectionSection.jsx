import React from 'react';
import jacket from '../../assets/image/collection.png'

const CollectionSection = () => {
    return (
        <div className="collection__background">
            <section className="collection py-10">
                <div className="container">
                    <h2 className="collection__title text-3xl font-semibold text-center">КОЛЛЕКЦИЯ</h2>
                    <div className="collection__blocks grid grid-cols-3 mt-8 gap-8">
                        <div className="collection__block-one text-center">
                            <img src={jacket} alt="" className="w-full" />
                            <p className="collection__desc mt-3">Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni</p>
                        </div>
                        <div className="collection__block-two text-center">
                            <img src={jacket} alt="" className="w-full" />
                            <p className="collection__desc mt-3">Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton</p>
                        </div>
                        <div className="collection__block-three text-center">
                            <img src={jacket} alt="" className="w-full" />
                            <p className="collection__desc mt-3">Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                        </div>
                    </div>
                    <div className="collection__all mt-8">
                        <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto">СМОТРЕТЬ БОЛЬШЕ</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CollectionSection;
