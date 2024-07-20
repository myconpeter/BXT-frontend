import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BsFillHexagonFill } from 'react-icons/bs';

const LoginScreen = () => {
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
					<p className='text-blueOne text-sm font-semibold'>Email</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='email'
							className='bg-transparent focus:outline-none h-11 '
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-col mx-3    text-lg mb-2 mt-5'>
					<p className='text-blueOne text-sm font-semibold'>
						Password
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type={see === true ? 'text' : 'password'}
							id='password'
							className='bg-transparent border-overLay   py-2 focus:outline-none w-4/6  '
						/>
						{/* <button onClick={toggle}>
							{see === true ? (
								<IoMdEye className='text-overLay' />
							) : (
								<IoMdEyeOff className='text-overLay' />
							)}
						</button> */}
					</div>
				</div>

				<Link
					to='/home'
					className='bg-blueOne font-medium p-2 text-white text-center w-5/6 rounded-xl justify-center items-center ml-9 text-xl mt-5 '>
					{'Login'}
				</Link>

				<div className='flex  justify-end mr-4 mt-3'>
					<Link
						to='/forgot-password'
						className=' text-sm text-blueTwo font-bold'>
						Forgotten Password ?{' '}
					</Link>
				</div>

				{/* the sign up function */}
				<div className='flex flex-col items-end pt-2 mt-1 space-y-1 mr-4'>
					<p className='text-sm text-blueOne'>
						Dont't have an account ?{' '}
					</p>
					<Link
						to='/register'
						className='font-bold text-blueThree'>
						Register
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginScreen;
