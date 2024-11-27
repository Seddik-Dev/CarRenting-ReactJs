import React from 'react'
import Cars from './Cars'

function OurFleet() {
    return (
        <div>
            <div className="mx-4 sm:mx-8 lg:mx-16">
                <section className="text-center pt-10 pb-5">
                    <h1 className="text-5xl font-extrabold mb-2"><span className='text-orange-600'>Our</span> Fleet</h1>
                </section>
                <p className='text-center font-medium'>
                Chez <span className='text-orange-600 font-bold'>Car</span><span className='font-bold text-black'>
                Deal</span>, nous sommes fiers de proposer une large gamme de véhicules adaptés à tous vos besoins. Que vous recherchiez une petite voiture pour vos déplacements urbains, une berline luxueuse pour des affaires, ou un SUV pour un voyage en famille, nous avons le véhicule parfait pour chaque occasion.
                </p>
                <p className='text-center font-medium text-black-600/50 dark:text-black-500/50"'>Réservez votre voiture dès aujourd'hui et prenez la route en toute sérénité et confort !</p>
                <Cars/>
            </div>
        </div>
    )
}

export default OurFleet