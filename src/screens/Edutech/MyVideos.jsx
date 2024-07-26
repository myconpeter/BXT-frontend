import { Form } from 'react-router-dom';
import Menu from '../../components/Menu';
import Book from '../../molecule/Book';
import { FaSearch } from 'react-icons/fa';
import Videos from '../../molecule/Videos';

const MyVideos = () => {
	const submitSearch = (e) => {
		e.preventDefault();
		console.log('i am clicked');
	};
	return (
		<div className='relative bg-lightGray w-screen '>
			<div>{<Menu PageName=' Courses' />}</div>

			<div className='pt-16 relative '>
				<div className='relative '>
					<div className='relative flex flex-col justify-center items-center gap-2'>
						<p className='text-center font-semibold text-blueOne te'>
							Explore more exciting and educational Courses
						</p>
						{/* <p className='p-1 bg-white text-blueOne text-xs  rounded-full font-bold'>
							7
						</p> */}

						<form className='relative flex gap-3'>
							<input
								type='search'
								name=''
								id=''
								placeholder='Search Courses'
								className='relative  rounded-lg pl-3'
							/>

							<button
								onClick={(e) => {
									submitSearch(e);
								}}>
								<FaSearch />
							</button>
						</form>
					</div>
				</div>

				<div className='mt-5 mx-5'>
					<div className='relative flex justify-between items-center'>
						<p>Current Available Courses </p>
					</div>

					<div className='relative gap-2   mt-4 grid grid-cols-3 overflow-y-auto pb-24'>
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
						{<Videos />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyVideos;
