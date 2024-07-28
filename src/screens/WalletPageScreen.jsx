import React from 'react';
import Menu from '../components/Menu';
import { FaUsersRays } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';
import { BsFillHexagonFill } from 'react-icons/bs';
import { FaPlusCircle } from 'react-icons/fa';

const WalletPageScreen = () => {
	return (
		<div>
			<div className='relative bg-lightGray w-screen h-screen'>
				<div>{<Menu PageName='Wallet' />}</div>

				<div className='pt-16  shadow-sm shadow-gray-600 pb-5'>
					<div className=' flex justify-between mx-6 '>
						<div className=' border-2 border-blueOne rounded-full p-2 bg-white h-12'>
							<div className='relative'>
								<FaUser className='text-3xl text-blueOne ' />
							</div>
							<BsFillHexagonFill className=' absolute  ml-1  text-blueOne text-2xl' />
						</div>

						<div className=' flex flex-col justify-end items-end text-blueTwo'>
							<div className='relative flex gap-2 items-center'>
								<p>Current BST Balance</p>
								<p>0.000234</p>
							</div>

							<div className='relative flex gap-2 items-center'>
								<p>Dollar Equivalent</p>
								<p>$2</p>
							</div>

							<div className='relative flex gap-2 items-center text-blueOne'>
								<p>Current BST Price</p>
								<p>0.00025669</p>
							</div>
						</div>
					</div>
				</div>

				<div className=' ml-4 mt-4'>
					<p className='text-xl font-bold text-blueOne'>
						Funding Method
					</p>

					<div className='mt-2 flex flex-col w-5/6 '>
						<button className=' px-4 py-4 bg-white text-blueTwo font-bold'>
							Via Gateway
						</button>

						<button className=' px-4 py-4 bg-white text-blueTwo font-bold mt-5'>
							Via Wallet Address
						</button>

						<button className=' px-4 py-4 bg-white text-blueTwo font-bold mt-5'>
							Via Shares{' '}
							<span className='text-[10px]'>
								( Coming soon.. )
							</span>
						</button>
						<button className=' px-4 py-4 bg-white text-blueTwo font-bold mt-5'>
							Via Marchant
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletPageScreen;
