import React from 'react';
import Menu from '../components/Menu';
import { ImArrowDown } from 'react-icons/im';
import { ImArrowUp } from 'react-icons/im';
import { RiRefund2Fill } from 'react-icons/ri';

import { BiWorld } from 'react-icons/bi';
import { GiSpellBook } from 'react-icons/gi';
import { BiSolidBookReader } from 'react-icons/bi';
import { MdOutlineSsidChart } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaUsersRays } from 'react-icons/fa6';
import { RiBitCoinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Dashboard' />}</div>

			<div className='pt-16  w-screen'>
				<div className='flex justify-center items-center flex-col'>
					<p className='text-blueOne text-xl'>Total Balance</p>
					<p className='text-blueOne text-2xl font-bold'>
						0.00001234
					</p>
					<p className='text-blueOne text-xl font-bold'>$20.00</p>
				</div>

				<div className='mt-2 flex justify-center items-center space-x-4 '>
					<div className='flex flex-col justify-center items-center'>
						<RiRefund2Fill className='text-4xl bg-white p-2 rounded-full text-blueOne font-extrabold' />
						<p className='text-blueTwo'>Fund</p>
					</div>

					<div className='flex flex-col justify-center items-center'>
						<ImArrowUp className='text-4xl bg-white p-2 rounded-full text-blueOne font-extrabold' />
						<p className='text-blueTwo'>Buy</p>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<ImArrowDown className='text-4xl bg-white p-2 rounded-full text-blueOne font-extrabold' />
						<p className='text-blueTwo'>Sell</p>
					</div>
				</div>

				<div className=' border-b-2 border-white mt-2'></div>
			</div>

			<div className='mt-3 ml-3'>
				<div>
					<p className='text-blueOne text-xl font-bold'>
						Service / Product
					</p>
				</div>

				<div className='mt-3 space-y-7'>
					<Link
						to='/payment-service/airtime-purchase'
						className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<BiWorld className='text-2xl' />
						<p>Data and Utility Bill Payment</p>
					</Link>

					<Link
						to='/edutech'
						className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<GiSpellBook className='text-2xl' />
						<p>Edutech skills acquisition platforms</p>
					</Link>

					<Link className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<BiSolidBookReader className='text-2xl' />
						<p>E-booking system</p>
					</Link>

					<Link className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<MdOutlineSsidChart className='text-2xl' />
						<p>Staking Platform</p>
					</Link>

					<Link className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<AiFillDollarCircle className='text-2xl' />
						<p>Crypto ot Fait exchange</p>
					</Link>

					<Link className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<FaUsersRays className='text-2xl' />
						<p>Peer-to-peer </p>
					</Link>

					<Link className='flex justify-start items-center space-x-3 text-lg text-blueOne'>
						<RiBitCoinLine className='text-2xl' />
						<p>BST DEX</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
