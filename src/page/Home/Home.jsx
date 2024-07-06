import Banner from "./Banner";
import FeatureSection from "./FeatureSection";

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            {/* Features section */}
            <FeatureSection/>
        </div>
    );
};

export default Home;