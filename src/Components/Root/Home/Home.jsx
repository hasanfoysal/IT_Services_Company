import Ceo from "../../Ceo/Ceo";
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
        </div>
    );
};

export default Home;