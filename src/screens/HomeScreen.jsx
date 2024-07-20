import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import { useEffect } from 'react';
import { GiPlainArrow } from 'react-icons/gi';

const HomeScreen = () => {
	return (
		<div className=''>
			<div className=' top-96 h-full w-full overflow-hidden bg-fixed'>
				<div className='flex h-full items-center justify-center'>
					<div className='relative flex flex-col'>
						<img
							className=' h-[30rem] w-96 z-0 items-center'
							src={logo}
							alt='micheal'
						/>

						<div className=' absolute top-[370px] z-10 rounded-full flex w-fit flex-col '>
							<button
								to='loginORsignup'
								className=' text-blueOne text-2xl font-serif font-bold flex cursor-pointer w-fit ml-9'>
								ENTER INTO THE
								<span className='text-black ml-5  '>
									{/* <FaLocationArrow className='text-overLay rotate-45' /> */}
								</span>
							</button>

							<div>
								<Link to='login'>
									<p className='text-4xl font-extrabold ml-9 text-white font-serif bg-blueOne rounded-lg p-5'>
										TECH WORLD
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className=' relative'>
				<GiPlainArrow className=' text-9xl -rotate-90' />
				<p className='absolute top-8 font-bold text-white '>
					TECH WORLD
				</p>
			</div> */}
		</div>
	);
};

export default HomeScreen;
