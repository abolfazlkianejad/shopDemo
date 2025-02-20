import Amar from "../../component/Amar/Amarjazb";
import Body from "../../component/Body/body";
// import Body2 from "../../component/body2/Body2";
import Body3 from "../../component/Body3/Body3";
import DivcardBody from "../../component/divcardbody/divcardbo";
import Employ from "../../component/employ/Employ";
import Divcard from "../../component/jazb/Divcard";
import Body4 from "../../component/lastbody/Body4";
import Nav from "../../component/Navbar/Nav";
import Navbar from "../../component/Navbar/Navbar";

function Home() {
    return (
        <div id="mainHome">
            <Navbar />
            <Body />
            
            <Amar />
            <Body3 />
            <Employ />
            <Divcard />
            <DivcardBody />
            <Body4 />
            <Nav />
            <Body3 />
        </div>
    );
}
export default Home;