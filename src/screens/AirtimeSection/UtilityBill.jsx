import React from 'react';
import Menu from '../../components/Menu';
import WarningText from '../../atoms/WarningText';
import ActionLink from '../../atoms/ActionLink';

import dstv from '../../assets/dstv.png';
import gotv from '../../assets/gotv.png';
import phcn from '../../assets/phcn.jpg';

const UtilityBills = () => {
	return (
		<div>
			<div className='relative bg-lightGray w-screen h-screen'>
				<div>{<Menu PageName='Utility Bills' />}</div>

				<div className='pt-20 ml-4'>
					{<ActionLink />}

					<p className='text-2xl font-bold text-blueOne mt-5'>
						Utility Bills Payment
					</p>

					<div className='mt-2 flex flex-col w-5/6 space-y-7 '>
						<div className='relative flex items-center justify-evenly'>
							<img
								src={dstv}
								alt='mtn'
								className='w-16'
							/>
							<button className=' px-4 py-4 bg-white text-blueTwo font-bold'>
								Dstv Subscription
							</button>
						</div>

						<div className='relative flex items-center justify-evenly'>
							<img
								src={gotv}
								alt='mtn'
								className='w-16'
							/>
							<button className=' px-4 py-4 bg-white text-blueTwo font-bold'>
								Gotv Subscription
							</button>
						</div>

						<div className='relative flex items-center justify-evenly'>
							<img
								src={phcn}
								alt='mtn'
								className='w-16'
							/>
							<button className=' px-4 py-4 bg-white text-blueTwo font-bold'>
								PHCN Payments
							</button>
						</div>
					</div>

					{<WarningText />}
				</div>
			</div>
		</div>
	);
};

export default UtilityBills;
