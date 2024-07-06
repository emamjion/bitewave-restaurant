import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}> <FaAngleLeft className={iconStyles}/> </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}> <FaAngleRight className={iconStyles}/> </button>
        </div>
    );
};

export default WorkSliderBtns;