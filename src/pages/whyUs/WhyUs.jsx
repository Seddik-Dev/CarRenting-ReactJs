import React from 'react'
import whyUsCar from '../../images/whyUs/whyUsCar.jpg'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
function WhyUs() {
    return (
        <div>
            <div className="mx-4 sm:mx-8 lg:mx-16">
                <section className="text-center pt-10 pb-5">
                    <h1 className="text-5xl font-extrabold mb-2"><span className='text-orange-600'>Why</span> US </h1>
                </section>
                <p className='text-center font-medium'>
                    Chez <span className='text-orange-600 font-bold'>Car</span><span className='font-bold text-black'>
                        Deal</span>, nous savons que choisir le bon service de location de voitures est essentiel pour une expérience agréable et sans souci. Voici pourquoi des milliers de clients nous font confiance :
                </p>
                <div class="h-full flex justify-between mt-4">

                    <LeftBar/>

                    <div className='w-full me-2 flex justify-center'>
                        <img src={whyUsCar} className='h-dvh w-5/6' />
                    </div>

                    <RightBar/>

                </div>
            </div>
        </div>
    )
}

export default WhyUs