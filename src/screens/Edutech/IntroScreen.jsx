import React from 'react';
import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

import Book from '../../molecule/Book';
import Videos from '../../molecule/Videos';
const IntroScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Edutech' />}</div>

			<div className='pt-16'>
				<div className=' relative mx-2 flex justify-between items-center'>
					<button className='px-3 py-2 bg-blueOne text-white rounded-xl font-semibold'>
						My Books{' '}
					</button>
					<button className='px-3 py-2 bg-blueOne text-white rounded-xl font-semibold'>
						My Courses{' '}
					</button>
				</div>

				<div className='mt-5 mx-5'>
					<div className='relative flex justify-between items-center'>
						<p>Explore More Books </p>
						<button className='px-3 py-1 rounded-xl bg-blueOne text-white text-xs'>
							More..
						</button>
					</div>

					<div className='relative flex mt-4 gap-1 overflow-x-auto'>
						{<Book />}
						{<Book />}
						{<Book />}
						{<Book />}
						{<Book />}
						{<Book />}
					</div>
				</div>
				{/* Videos */}

				<div className='mt-5 mx-5'>
					<div className='relative flex justify-between items-center'>
						<p>Explore More Courses </p>
						<button className='px-3 py-1 rounded-xl bg-blueOne text-white text-xs'>
							More..
						</button>
					</div>

					<div className='relative flex mt-4 gap-1 overflow-x-auto'>
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

export default IntroScreen;
