import Banner from "./Banner";
import FeatureSection from "./FeatureSection";
import SubscriptionSection from "./SubscriptionSection";

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            {/* Features section */}
            <FeatureSection/>

            {/* Subscription section */}
            <SubscriptionSection/>
        </div>
    );
};

export default Home;