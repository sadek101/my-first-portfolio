import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import About from "../About/About";


const Home = () => {
    return (
        <div className="mx-24">
            <Header></Header>
            <Slider></Slider>
            <About></About>
          <h3>this is home</h3>  
          <Footer></Footer>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;