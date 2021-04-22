import React from 'react';
import Phone from '../image/phone 3.jpg';
import Automate from '../image/automobile.jpg';
import Phone2 from '../image/phone 2.jpg';
import Res from '../image/nmpW_WwwVSc.jpg';
import Event from '../image/event.jpg';
import Shop from '../image/Shop.jpg';
import Chips from '../image/Chips.jpg';
import Res2 from '../image/Res2.jpg';

function CarouselSlide() {
	return (
		<div className="mt-5 top border-buss">
			<div className="row">
				<div className="col-md-12 mb-3">
					<div className="text-center my-3 top-buss mb-5">
						<h2 className="font-color">Top Business</h2>
						<div className="mx-auto product-slides  my-auto">
			<div>
      <ul>
        <li><img className="prod" src={Phone} /></li>
        <li><img  className="prod" src={Automate} /></li>
        <li><img className="prod" src={Res} /></li>
        <li><img className="prod" src={Event} /></li>
        <li><img className="prod" src={Phone} /></li>
        <li><img  className="prod" src={Automate} /></li>
        <li><img className="prod" src={Res} /></li>
        <li><img className="prod" src={Event} /></li>
        {/* <li><img className="prod" src="http://dummyimage.com/600x400/eeeeee/ffffff.png" /></li>
        <li><img className="prod" src="http://dummyimage.com/600x400/eeeeee/cccccc.png" /></li> */}
      </ul>
    </div>
    </div>
							</div>
							</div>
										</div>
			</div>
	);
}
export default CarouselSlide;
