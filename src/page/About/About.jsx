import PageBanner from "@/components/PageBanner";
import AboutUs from "../Home/AboutUs";
import HappyCustomers from "../Home/HappyCustomers";
import MeetOurTeam from "../Home/MeetOurTeam";

const About = () => {
  return (
    <div>
      <div className="pt-20">
        <PageBanner
          title="About Us"
          subtitle="Have questions about your order or want to collaborate? We’d love to hear from you!"
          bgImage="https://images.unsplash.com/photo-1521791136064-7986c2920216"
        />
      </div>
      {/* About us section */}
      <AboutUs />

      {/* Meet our team section */}
      <MeetOurTeam />

      {/* Happy customer section */}
      <HappyCustomers />
    </div>
  );
};

export default About;
