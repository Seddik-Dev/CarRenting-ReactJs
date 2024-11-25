import React from 'react'
import Carousel from './Carousel';
import ListAdvantages from './ListAdvantages';
function AboutUs() {
    return (
        <div className="mx-4 sm:mx-8 lg:mx-16 bg-gradient-to-b  text-black min-h-screen">
            <section className="text-center py-10">
                <h1 className="text-5xl font-extrabold mb-2"><span className='text-orange-600'>About</span> Us</h1>
            </section>
            <div className='flex'>
                <div className="flex-1 mx-5 font-medium">
                    <p className='text-justify '>
                        Bienvenue chez <span className='text-orange-600 font-bold'>Car</span><span className='font-bold text-black'>
                            Deal</span>, votre partenaire de confiance pour vos besoins en location de voitures. Depuis notre création, nous nous engageons à offrir à nos clients une expérience de location simple, rapide et abordable, adaptée à toutes leurs attentes.
                    </p>
                    <h4 className='text-2xl text-black font-bold mt-2'>Notre Mission :</h4>
                    <p>
                        Nous avons pour mission de fournir des véhicules de haute qualité, adaptés à toutes les occasions : voyages d’affaires, escapades en famille, vacances entre amis ou simples déplacements quotidiens. Chez <span className='text-orange-600 font-bold'>Car</span><span className='font-bold text-black'>
                            Deal</span>, nous croyons que la mobilité doit être accessible à tous, sans compromis sur le confort et la sécurité.
                    </p>
                    <ListAdvantages/>
                </div>
                <div className="flex-1">
                    <Carousel />
                </div>
            </div>
        </div>
    );
}

export default AboutUs