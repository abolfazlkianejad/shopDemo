import 'bootstrap/dist/css/bootstrap.min.css';
import'./body.mu.css';
function Body(){
    const imageExample = require('./image 22.png');
 return(
    <div id='all' className="row" dir='rtl'>
        <div className="col-2">
            <img id='img' src={imageExample} alt="" />
        </div>
        <div className="col-7">
           <dir id='moh'> محسن نیرومند</dir>
           <dir id='khosh'>خوش آمدید</dir>
           <dir id='ted'>تعداد کاربر : 5نفر</dir>
        </div>
        <div id='div2' className='col-1'>
            <div id='yer'>13 سال</div>
            <div id='aa'>گرید A</div>
            <div id='sary'> ساری
            </div>

        </div>
    </div>
 );   
}
export default Body;