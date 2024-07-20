import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [see, setSee] = useState(false);

	const toggle = (i) => {
		i.preventDefault();
		if (see === false) {
			setSee(true);
		} else {
			setSee(false);
		}
	};
	return (
		<div className='w-screen bg-darkGray h-screen'>
			<div className='flex justify-center items-center pt-5 '>
				<div className='  bg-gray-500 p-5 rounded-full'>
					<div className=' border-4 border-blueOne rounded-full p-5 bg-white'>
						<div className='relative'>
							<FaUser className='text-6xl text-blueOne ' />
						</div>
						<BsFillHexagonFill className=' absolute mt-3 ml-2  text-blueOne text-5xl' />
					</div>
				</div>
			</div>

			<form className='pt-10  flex flex-col md:flex  '>
				<div className='flex flex-col mx-3    text-lg mb-2'>
					<p className='text-blueOne text-sm font-semibold'>
						Enter a valid Email Address
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='email'
							className='bg-transparent focus:outline-none h-11 ml-3 '
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Please Enter A Registered Email Address'
						/>
					</div>
				</div>

				<button
					type='submit'
					to='/home/homepage'
					className='bg-blueOne font-medium p-2 text-white text-center w-5/6 rounded-xl justify-center items-center ml-9 text-xl mt-5 '>
					{'Send OTP'}
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;
