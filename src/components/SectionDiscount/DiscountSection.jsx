import React from 'react';
import discountImage from '../../assets/image/discount.png';

const DiscountSection = () => {
    return (
        <section className="discount mt-10 relative flex justify-center ">
            <div className="discount__image bg-cover bg-no-repeat flex items-center  " style={{ backgroundImage: `url(${discountImage})`, height: '322px', width: '1520px' }}>
                <div className="container">
                    <div className="discount__content flex justify-center items-center">
                        <div className="discount__left text-center">
                            <h2 className="discount__title text-4xl md:text-5xl lg:text-5xl">СКИДКИ</h2>
                            <h2 className="discount__subtitle text-3xl md:text-4xl lg:text-6xl mt-4">ДО -70%</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;
