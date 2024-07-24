import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BsFillHexagonFill } from 'react-icons/bs';
import { FaPlusCircle } from 'react-icons/fa';

import { BiWorld } from 'react-icons/bi';
import { GiSpellBook } from 'react-icons/gi';
import { BiSolidBookReader } from 'react-icons/bi';
import { MdOutlineSsidChart } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaUsersRays } from 'react-icons/fa6';
import { RiBitCoinLine } from 'react-icons/ri';
import RoadMap from '../atoms/RoadMap';
import Advert from '../atoms/Advert';
const HomePageScreen = () => {
	return (
		<div className='h-screen w-screen bg-lightGray'>
			<div className='pt-10  shadow-sm shadow-gray-600 pb-5'>
				<div className=' flex justify-between mx-6 '>
					<div className=' border-4 border-blueOne rounded-full p-2 bg-white'>
						<div className='relative'>
							<FaUser className='text-3xl text-blueOne ' />
						</div>
						<BsFillHexagonFill className=' absolute mt-1 ml-1  text-blueOne text-2xl' />
					</div>

					<div className=' flex flex-col justify-end items-end text-blueTwo'>
						<div className='relative flex gap-2 items-center'>
							<p>0.000234</p>
							<FaPlusCircle />
						</div>

						<div className='relative flex gap-2 items-center'>
							<p>$25</p>
							<FaPlusCircle />
						</div>
					</div>
				</div>
			</div>

			<div className='mx-3 mt-3'>
				<div>
					<p className='text-2xl font-bold text-blueTwo'>Products</p>
					<div className='relative flex mt-3 gap-4 justify-center'>
						<Link to='/payment-service/airtime-purchase'>
							<BiWorld className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/edutech'>
							<GiSpellBook className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/e-booking'>
							<BiSolidBookReader className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/staking'>
							<MdOutlineSsidChart className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/exchange'>
							<AiFillDollarCircle className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/peer'>
							<FaUsersRays className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
						<Link to='/bst-dex'>
							<RiBitCoinLine className='p-1 bg-white text-blueTwo rounded-full text-4xl' />
						</Link>
					</div>
				</div>
			</div>

			<RoadMap />
			{<Advert />}
		</div>
	);
};

export default HomePageScreen;
