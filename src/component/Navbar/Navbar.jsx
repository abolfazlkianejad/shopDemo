import "./navbar.mu.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const imageExample = require('./logoheader.png');
    const imageExample1 = require('./Frame.png');
    const imageExample2 = require('./Frame1.png');
    const imageExample3 = require('./Frame2.png');

    function handleButtonClick() {
        const sidebar = document.getElementById('d1');

        sidebar.classList.toggle("show");
        // document.body.style.opacity="50%";


    }
    return (

        <div id="divhead">
            <div className="row" dir="rtl" id="header" >
                <div className="col-2" onClick={handleButtonClick} id="ham">
                    <div className="menuhamberger"></div>
                    <div className="menuhamberger"></div>
                    <div className="menuhamberger1"></div>
                </div>
                <div className="col-5" id="logohamrah">
                    <img src={imageExample} alt="hamrahaval" id="logoham" />
                </div>
                <div className="col-1">
                    <img src={imageExample1} alt="massge" />
                    <div className="muncircel" >12</div>
                </div>
                <div className="col-1">
                    <img src={imageExample2} alt="notif" />
                    <div className="muncircel" >2</div>
                </div>
                <div className="col-1">
                    <img src={imageExample3} alt="gift" />
                    <div className="muncircel" >5</div>
                </div>
                <div className="col-1">
                    <button id="toggleButton"></button>
                </div>
                <div className="row offcanvas offcanvas-start hidde " id="d1" onClick={handleButtonClick}>

                </div>

            </div>





        </div>

    );
}

export default Navbar;