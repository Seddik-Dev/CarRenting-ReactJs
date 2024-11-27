import Navbar from "./Navbar";
import "./styles/Styles.css";
import AboutUs from "./pages/aboutsUs/AboutUs";
import OurFleet from "./pages/ourFleet/OurFleet";
import WhyUs from "./pages/whyUs/WhyUs";
import ContactUs from "./pages/ContactUs/ContactUs";
function App() {
  return (
    <>
      <div className="background flex flex-col h-screen">
        <Navbar />
        <div className="flex items-center mt-40">
          <div className="w-1/2 mx-9" >
            <p className="text-4xl font-medium text-gray-900 dark:text-white">
              <span className="text-orange-500 text-bold">Trouvez Votre Voiture</span>  : Location Simple, Rapide et Fiable
            </p>
            <small>Explorez une large sélection de véhicules adaptés à tous vos besoins. Des tarifs compétitifs, une réservation facile, et une expérience sans souci. Prenez la route dès aujourd’hui !</small>
          </div>
        </div>
        <div className="flex items-end mt-10">
          <button class="mx-9 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center">
            Explorez Nos Voitures
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="ml-2">
              <path fill="currentColor" d="M8 19V5l11 7z"></path>
            </svg>
          </button>
        </div>
      </div>
      <AboutUs/>
      <OurFleet/>
      <WhyUs/>
      <ContactUs/>
    </>
  );
}
export default App;
