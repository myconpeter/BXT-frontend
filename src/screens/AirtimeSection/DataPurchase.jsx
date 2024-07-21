import Menu from '../../components/Menu';
import InputSage from '../../atoms/InputSaga';
import { useState } from 'react';
import ActionLink from '../../atoms/ActionLink';
import WarningText from '../../atoms/WarningText';

const DataPurchase = () => {
	const [amount, setAmount] = useState('0');

	const handleChange = (e) => {
		// Ensure only numeric input
		const value = e.target.value.replace(/\D/, '');
		setAmount(value);
	};
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Data Purchase' />}</div>

			<div className='relative pt-16 mx-4'>
				{<ActionLink />}

				<div className='relative mt-4'>
					<p className='relative font-bold text-blueOne text-lg'>
						Mobile Data
					</p>

					{<InputSage />}
				</div>

				<div className='relative mt-3'>
					<p className='relative font-bold text-blueOne text-lg'>
						Plan
					</p>

					<div className='relative space-y-5 mt-3'>
						<div className='relative shadow-md shadow-gray-700 text-md text-blueOne px-2 py-1 flex  justify-between items-center font-semibold'>
							<p>Daily Plan </p>
							<p>0.000234 $BST </p>
							<button className='p-2 bg-blueOne text-white rounded-lg font-semibold'>
								Pay{' '}
							</button>
						</div>
						<div className='relative shadow-md shadow-gray-700 text-md text-blueOne px-2 py-1 flex  justify-between items-center font-semibold'>
							<p>Weekly Plan </p>
							<p>0.003234 $BST </p>
							<button className='p-2 bg-blueOne text-white rounded-lg font-semibold'>
								Pay{' '}
							</button>
						</div>
						<div className='relative shadow-md shadow-gray-700 text-md text-blueOne px-2 py-1 flex  justify-between items-center font-semibold'>
							<p>Monthly Plan </p>
							<p>0.045234 $BST </p>
							<button className='p-2 bg-blueOne text-white rounded-lg font-semibold'>
								Pay{' '}
							</button>
						</div>
						<div className='relative shadow-md shadow-gray-700 text-md text-blueOne px-2 py-1 flex  justify-between items-center font-semibold'>
							<p>Yearly Plan </p>
							<p>9.912234 $BST </p>
							<button className='p-2 bg-blueOne text-white rounded-lg font-semibold'>
								Pay{' '}
							</button>
						</div>
					</div>
				</div>

				{<WarningText />}
			</div>
		</div>
	);
};

export default DataPurchase;
