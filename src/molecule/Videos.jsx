import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Videos = () => {
	return (
		<div className='relative border-2 border-white rounded-xl justify-center h-52'>
			<div className='relative p-1 w-28'>
				<img
					src='https://img.youtube.com/vi/Hv70fn8xTL4/hqdefault.jpg'
					alt='bookOne'
					className='w-28 h-32 rounded-xl'
				/>

				<div className='mt-2 text-blueOne text-center'>
					<p className='text-xs'>0.03344 $bst</p>
				</div>

				<div className='relative flex justify-center items-center text-yellow-500 text-[10px]'>
					<div>{<FaStar />}</div>
					<div>{<FaStar />}</div>
					<div>{<FaStar />}</div>
					<div>{<FaStar />}</div>
					<div>{<FaStar />}</div>
				</div>

				<div className='mt-2 text-blueOne text-center'>
					<Link
						to='/edutech/more-course-details'
						className='px-3 py-1 rounded-xl bg-blueOne text-white text-xs'>
						More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Videos;
