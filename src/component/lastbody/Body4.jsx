import './Body4.mu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Body4() {
    const img = require('./Frame.png');
    const img1 = require('./image 22.png');
    return (

        <div className='divee' dir='rtl'>
            <div className='row' id='row1'>
                <div className='col-9'>
                    <h5 >توصیه نمایندگان </h5>
                </div>
                <div className='col-2' id='col2'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='row'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={img1} alt="" id='img1' />
                    </div>
                    <div className='col-7'>
                        <div className='row-2' id='nam'>نماینده 5454</div>
                        <div className='row-9' id='nam1'>10 دقیقه پیش</div>
                    </div>
                </div>

            </div>
            <div >
                <p>
                    “با تأکید بر ویژگی‌های منحصر به فرد و ارائه مشاوره شخصی، جذب سیم‌کارت‌های دائمی و اعتباری ما بیش از 60 درصد افزایش یافت”
                </p>
            </div>
            <div className='row'>
            <div className='row'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={img1} alt="" id='img1' />
                    </div>
                    <div className='col-7'>
                        <div className='row-2' id='nam'>نماینده 5454</div>
                        <div className='row-9' id='nam1'>10 دقیقه پیش</div>
                    </div>
                </div>

            </div>
            </div>
            <p>
            “معرفی دقیق مزایا و پیشنهادهای ویژه، جذب سیم‌کارت‌ها را به شکل قابل ملاحظه‌ای افزایش داد، تخفیف‌های ویژه و پیشنهادات جذاب، از جمله کارهایی بود که انجام دادیم”
            </p>

        </div>

    );
};

export default Body4;
