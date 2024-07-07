import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Banner from "./Banner";
import FeatureSection from "./FeatureSection";
import MeetOurTeam from "./MeetOurTeam";
import SubscriptionSection from "./SubscriptionSection";

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            {/* Features section */}
            <FeatureSection/>

            {/* Subscription section */}
            <SubscriptionSection/>

            {/* About us section */}
            <AboutUs/>

            {/* App Section */}
            <AppSection/>
            
            {/* Meet our team section */}
            <MeetOurTeam/>
        </div>
    );
};

export default Home;