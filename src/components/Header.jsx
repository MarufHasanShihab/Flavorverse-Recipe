import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import banner4 from "../assets/banner4.webp"
import PropTypes from "prop-types"

const images = [banner1, banner2, banner3, banner4];



const Header = ({image, title, type}) => {
    return (
        <div className="w-full h-[100vh] ">
            <div className="relative w-full h-full">
                <img src={image ?? images[Math.floor(Math.random()*images.length)]} alt="banner_image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20  px-8">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center">{title}</h1>
                {
                    type && (
                        <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090]  px-6 py-4 rounded-full ">Welcome to Flavorverse, your passport to culinary a adventures <br className="hidden md:-block"/>Discover a treasure of delectable recipes from around the globe</p>
                    )
                }
            </div>
        </div>
    );
};


Header.propTypes = {
    image: PropTypes.string,
    title : PropTypes.string,
    type : PropTypes.string
}

export default Header;