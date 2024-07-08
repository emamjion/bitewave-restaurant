import AboutUs from '../Home/AboutUs';
import HappyCustomers from '../Home/HappyCustomers';
import MeetOurTeam from '../Home/MeetOurTeam';

const About = () => {
    return (
        <div>
            {/* About us section */}
            <AboutUs/>
            
            {/* Meet our team section */}
            <MeetOurTeam/>

            {/* Happy customer section */}
            <HappyCustomers/>
        </div>
    );
};

export default About;