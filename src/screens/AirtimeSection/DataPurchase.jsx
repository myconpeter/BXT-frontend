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
				</div>

				{<WarningText />}
			</div>
		</div>
	);
};

export default DataPurchase;
