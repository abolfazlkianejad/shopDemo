import './Divcard.css';


function Divcard() {
    const imageExample = require('./Screenshot (22).png');
    return (
        <div className="divcard">
            <div className="divcard-headerpb-0border-0">
                <div className="div">
                    <div className="div1">کل جذب</div>
                    <div className="m">5M</div>
                </div>
                <div className="ulcard-list">
                    <div className="lijustify-content-end">
                        <div className="spanbg-successcircleme-0ms" />
                    </div>
                    <div className="lijustify-content-end1">
                        <div className="div2">جذب دائمی</div>
                        <div className="spanbg-dangercircleme-0ms-" />
                    </div>
                </div>
                <div className="div3">جذب اعتباری</div>
            </div>
            <div className="svgjssvg1528">
                <img src={imageExample} alt="" id='imgch'/>

            </div>

        </div>);
};

export default Divcard;
