import Menu from '../../components/Menu';
import BookOne from '../../assets/bookOne.jpeg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MoreCoursesDetails = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen '>
			<div>{<Menu PageName=' Courses' />}</div>

			<div className='relative pt-16 mx-2'>
				<div className='relative flex justify-center items-center'>
					<img
						src='https://img.youtube.com/vi/Hv70fn8xTL4/hqdefault.jpg'
						alt='bookOne'
						className=' rounded-xl h-48 w-4/6'
					/>
				</div>

				<div className='relative mt-3 flex justify-center items-center flex-col'>
					<p className='relative font-bold text-2xl text-blueOne '>
						Next js Crash Course
					</p>
					<p>
						Author :{' '}
						<span>Micheal Peter (B.sc Computer Science)</span>
					</p>

					<div className='relative flex gap-4 items-center justify-center'>
						<p>Rating :</p>
						<div className='relative flex justify-center items-center text-yellow-500 text-sm'>
							<div>{<FaStar />}</div>
							<div>{<FaStar />}</div>
							<div>{<FaStar />}</div>
							<div>{<FaStar />}</div>
							<div>{<FaStar />}</div>
						</div>
					</div>

					<div className='relative flex items-center justify-center gap-3'>
						<p>Price : </p>
						<p>0.000223 $bst</p>
					</div>

					<div className='relative'>
						<p className=''>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Illo aperiam repellendus, eveniet voluptas
							quia adipisci natus harum fugiat, voluptate dolorum
							nobis! Provident veritatis deserunt ipsam, est
							blanditiis perferendis natus officiis deserunt
							ipsam, est...
						</p>
					</div>

					<div className='mt-9'>
						<Link className='py-2 px-4 bg-blueOne font-bold text-white rounded-lg text-xl'>
							Buy Course
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreCoursesDetails;
