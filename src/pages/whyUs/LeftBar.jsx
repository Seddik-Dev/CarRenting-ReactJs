import React from 'react'

function LeftBar() {
    return (
        <>
            <h5 className='flex flex-wrap  w-full'>
                <div className='w-full mx-2'>
                    <a href="#" class="block max-w-sm p-6 bg-gradient-to-r from-orange-500 via-orange-600 to-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Une Large Gamme de Véhicules</h5>
                        <p class="font-normal  text-white text-center dark:text-gray-400">Une flotte variée adaptée à tous vos besoins : citadines, SUV, berlines, ou voitures de luxe.</p>
                    </a>
                </div>
                <div className='w-full mx-2'>
                    <a href="#" class="block max-w-sm p-6 bg-gradient-to-r from-orange-500 via-orange-600 to-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Tarifs Transparents1</h5>
                        <p class="font-normal text-white text-center dark:text-gray-400">Des prix compétitifs, sans frais cachés, pour une totale tranquillité d’esprit.</p>
                    </a>
                </div>
                <div className='w-full mx-2'>
                    <a href="#" class="block max-w-sm p-6 bg-gradient-to-r from-orange-500 via-orange-600 to-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Réservation Facile</h5>
                        <p class="font-normal text-white text-center dark:text-gray-400">Un système de réservation rapide et intuitif, disponible en ligne 24/7..</p>
                    </a>
                </div>
                <div className='w-full mx-2'>
                    <a href="#" class="block max-w-sm p-6 bg-gradient-to-r from-orange-500 via-orange-600 to-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Entretien Impeccable</h5>
                        <p class="font-normal text-white text-center dark:text-gray-400">Des véhicules propres et rigoureusement entretenus pour garantir sécurité et confort..</p>
                    </a>
                </div>
            </h5>
        </>
    )
}

export default LeftBar