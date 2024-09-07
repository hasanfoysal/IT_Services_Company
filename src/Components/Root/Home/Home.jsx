import Ceo from "../../Ceo/Ceo";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
import TeamMembers from "../../TeamMembers/TeamMembers";
import WhyChooseLMGroup from "../../WhyChooseLMGroup/WhyChooseLMGroup";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Ceo></Ceo>
            <WhyChooseLMGroup></WhyChooseLMGroup>
            <TeamMembers></TeamMembers>
            <Contact></Contact>
        </div>
    );
};

export default Home;