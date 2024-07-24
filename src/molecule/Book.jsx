import booKOne from '../assets/bookOne.jpeg';
import { FaStar } from 'react-icons/fa';

const Book = () => {
	return (
		<div className='relative border-2 border-white rounded-xl justify-center h-52'>
			<div className='relative p-1 w-28'>
				<img
					src={booKOne}
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
					<button className='px-3 py-1 rounded-xl bg-blueOne text-white text-xs'>
						More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Book;
