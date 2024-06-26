import Banner from "../../Components/Banner/Banner";
import "./home.css"

const Home = () => {
    return ( 
        <>
            <div className="hero">
            <div className="heroContent">
                <p className="title">No fees.</p>
                <p className="title">No minimum deposit</p>
                <p className="title">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
        </div>
        <Banner />
        </>
     );
}
export default Home;