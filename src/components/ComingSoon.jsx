import { IoHourglassOutline } from 'react-icons/io5';

const ComingSoon = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen flex items-center justify-center'>
			<div className=' bg-blueOne w-full h-2/5 text-white flex flex-col  rounded-lg text-3xl justify-center items-center gap-4 font-bold'>
				<IoHourglassOutline className='text-7xl ' />
				COMING SOON !!!
			</div>
		</div>
	);
};

export default ComingSoon;
