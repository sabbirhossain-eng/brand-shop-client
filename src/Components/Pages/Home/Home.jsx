import Footer from "../../Footer/Footer";
import Banner from "../../Header/Banner";

import OurStory from "../OurStory/OurStory";
import Testimonial from "../OurStory/Testimonial";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <OurStory></OurStory>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;