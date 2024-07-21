import Menu from '../../components/Menu';
import InputSage from '../../atoms/InputSaga';
import { useState } from 'react';
import ActionLink from '../../atoms/ActionLink';
import WarningText from '../../atoms/WarningText';

const AirtimePurchase = () => {
	const [amount, setAmount] = useState('0');

	const handleChange = (e) => {
		// Ensure only numeric input
		const value = e.target.value.replace(/\D/, '');
		setAmount(value);
	};
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Airtime Purchase' />}</div>

			<div className='relative pt-16 mx-4'>
				{<ActionLink />}

				<div className='relative mt-4'>
					<p className='relative font-bold text-blueOne text-lg'>
						Airtime
					</p>

					{<InputSage />}
				</div>

				<div className='relative mt-3'>
					<p className='relative font-bold text-blueOne text-lg'>
						Amount
					</p>

					<div className='flex items-center'>
						<span className='pl-5 mt-6 h-10'>₦</span>
						<input
							type='text'
							value={amount}
							onChange={handleChange}
							className='w-4/5 ml-2 pl-2 mt-3 h-10'
							style={{ width: 'calc(100% - 10rem)' }} // Adjust width to fit the input and naira sign together
						/>
						<button className='px-2 py-2 bg-blueOne mt-2 rounded-lg ml-3 text-white '>
							{' '}
							Pay
						</button>
					</div>
				</div>

				<div className='relative mt-4'>
					<p className='relative font-bold text-blueOne text-lg '>
						Choose Your Preferred Amount
					</p>

					<div>
						<div className='relative flex justify-evenly '>
							<button className='mt-3 px-6 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								100
							</button>
							<button className='mt-3 px-6 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								200
							</button>
							<button className='mt-3 px-6 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								500
							</button>
						</div>

						<div className='relative flex justify-evenly '>
							<button className='mt-3 px-5 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								1000
							</button>
							<button className='mt-3 px-5 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								2000
							</button>
							<button className='mt-3 px-5 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								5000
							</button>
						</div>

						<div className='relative flex justify-evenly '>
							<button className='mt-3 px-4 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								10000
							</button>
							<button className='mt-3 px-4 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								20000
							</button>
							<button className='mt-3 px-4 py-2 border-2 border-blueOne  text-blueOne font-semibold'>
								50000
							</button>
						</div>
					</div>
				</div>

				{<WarningText />}
			</div>
		</div>
	);
};

export default AirtimePurchase;
