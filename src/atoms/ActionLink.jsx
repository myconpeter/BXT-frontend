import { Link } from 'react-router-dom';

const ActionLink = () => {
	return (
		<div className='relative '>
			<p className='relative font-bold text-blueOne text-lg'>Action</p>
			<div className='relative mt-3 ml-2 flex justify-center gap-3 items-center'>
				<Link
					to='/payment-service/airtime-purchase'
					className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
					Airtime
				</Link>
				<Link
					to='/payment-service/data-purchase'
					className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
					Data
				</Link>
				<Link
					to='/payment-service/utility-bills'
					className='px-4 py-2 bg-blueOne text-white font-semibold rounded-lg'>
					Utility Bills
				</Link>
			</div>
		</div>
	);
};

export default ActionLink;
