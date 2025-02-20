import './Amar.mu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Amar() {
    const imageExample = require('./Screenshot-2024-11-13-111423 1.png');
    return (
        <div className='divmain'>
            <h5 dir='rtl'>آمار جذب </h5>
            <div>
                <div className="progresscontainer">
                    <div className="progressbar">70%</div>
                </div>
            </div>
            <div>
                <div className="progresscontainer">
                    <div className="progressbar">70%</div>
                </div>
            </div>
            <div id='table' dir='rtl'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>هدف</th>
                            <th>عملکرد</th>
                            <th>در آمد</th>
                        </tr>
                        
                    </thead>
                   
                    <tbody>
                        <tr>
                            <td>دائمی </td>
                            <td>100</td>
                            <td>60</td>
                            <td>1.3 میلیون</td>
                        </tr>
                        <tr>
                            <td>اعتباری</td>
                            <td>150</td>
                            <td>180</td>
                            <td>1.5 میلیون </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='divimg'>
                <img src={imageExample} id='img2' alt='' />
            </div>
            <div id='ch40'>40%</div>
            <div id='ch60'>60%</div>
            <div id='slary1'>
                <h4>محاسبه درآمد </h4>
                <h3>13.000.000</h3>
                <div className="progresscontainer" >
                    <div className="progressbar">70%</div>
                </div>
            </div>
           
            <div className='row'>
                <div className='col'>
                    <p>رتبه در شهرستان </p>
                    <br />
                    <p>110</p>
                </div>
                
                <div className='col'>
                    <p>رتبه در استان </p>
                    <br />
                    <p>350                                  </p>
                </div>
            </div>




        </div>
    );
}
export default Amar;