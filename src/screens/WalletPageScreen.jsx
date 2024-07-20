import React from 'react';
import Menu from '../components/Menu';

const WalletPageScreen = () => {
	return (
		<div>
			<div className='relative bg-lightGray w-screen h-screen'>
				<div>{<Menu PageName='Wallet' />}</div>

				<div className='pt-20 ml-4'>
					<p className='text-2xl font-bold text-blueOne'>
						Payment mode
					</p>

					<div className='mt-2 flex flex-col w-5/6 '>
						<button className=' px-4 py-4 bg-white text-blueTwo font-bold'>
							Via Gateway
						</button>

						<button className=' px-4 py-4 bg-white text-blueTwo font-bold mt-5'>
							Via Wallet Address
						</button>

						<button className=' px-4 py-4 bg-white text-blueTwo font-bold mt-5'>
							Via Shares
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletPageScreen;
