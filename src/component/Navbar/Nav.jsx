import "./navbar.mu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    const imageExample = require('./logoheader.png');
    const imageExample1 = require('./Frame.png');
    const imageExample2 = require('./Frame1.png');
    const imageExample3 = require('./Frame2.png');
    return (
        <div className="header" dir="rtl">
            <div className="row">
                <div className="col">
                    <div className="menuhamberger"></div>
                    <div className="menuhamberger"></div>
                    <div className="menuhamberger1"></div>
                </div>
                <div className="col-5">
                <img src={imageExample} alt="hamrahaval"  id="logoham" />
                </div>
                <div className="col">
                <img src={imageExample1} alt="massge" className="z-1"/>
                <div className="muncircel z-3 position-absolute p-5 rounded-3"  >12</div>
                </div>
                <div className="col">
                <img src={imageExample2} alt="massge" className="z-1" />
                <div className="muncircel z-3 position-absolute p-5 rounded-3" >12</div>
                </div>
                <div className="col">
                <img src={imageExample3} alt="massge" className="z-1" />
                <div className="muncircel z-3 position-absolute " >12</div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );

}
 
export default Nav;