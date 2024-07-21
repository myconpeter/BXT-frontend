import React from 'react';
import Menu from '../../components/Menu';
import InputSage from '../../atoms/InputSaga';

const AirtimePurchase = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Airtime Purchase' />}</div>

			<div className='relative pt-16 mx-4'>
				<div className='relative '>
					<p className='relative font-bold text-blueOne text-lg'>
						Action
					</p>
					<div className='relative mt-3 ml-2 flex justify-center gap-3 items-center'>
						<button className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
							Airtime
						</button>
						<button className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
							Data
						</button>
						<button className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
							Utility Bills
						</button>
					</div>
				</div>

				<div className='relative mt-4'>
					<p className='relative font-bold text-blueOne text-lg'>
						Airtime
					</p>
				</div>

				{<InputSage />}
			</div>
		</div>
	);
};

export default AirtimePurchase;
