import Body from '../Body/body';
import './divecard.mu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Divecardbody() {
    const imageExample = require('./Screenshot (24).png');
    return (
        <div className='mainDivecardbody' dir='rtl'>
            <div >
                <h4>پیشخوان برتر</h4>
                <p>از بین دفاتر پیشخوان بیشترین جذب را داشته</p>
            </div>
            <div>
                <Body />
            </div>
            <div className='row' id='texte'>
                <div className='col'>نمایندگان برتر </div>
                <div className='col'>نمایش همه </div>
                <img src={imageExample} alt="" id='imsn'/>
            </div>
            <div id='btndiv'>
                <button type="submit" id='btntexte'> جزئیات</button>
            </div>

        </div>
    );
}

export default Divecardbody;

