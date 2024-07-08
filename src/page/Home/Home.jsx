import { useState } from "react";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Banner from "./Banner";
import FeatureSection from "./FeatureSection";
import HappyCustomers from "./HappyCustomers";
import MeetOurTeam from "./MeetOurTeam";
import Menu from "./Menu";
import SubscriptionSection from "./SubscriptionSection";

const Home = () => {
    const [category, setCategory] = useState('all');

    
    return (
        <div className=''>
            <Banner/>
            {/* Features section */}
            <FeatureSection/>

            {/* Subscription section */}
            <SubscriptionSection/>

            {/* About us section */}
            <AboutUs/>

            {/* Menu Section */}
            <Menu 
                category={category} 
                setCategory={setCategory} 
            />

            {/* App Section */}
            <AppSection/>
            
            {/* Meet our team section */}
            <MeetOurTeam/>

            {/* Happy Customers section */}
            <HappyCustomers/>

            {/* TODO: Blog section will be add */}
        </div>
    );
};

export default Home;