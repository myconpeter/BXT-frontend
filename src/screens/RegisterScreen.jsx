import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BsFillHexagonFill } from 'react-icons/bs';

const RegisterScreen = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');
	const [country, setCountry] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
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

			<form className='pt-1  flex flex-col md:flex  '>
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>
						Username
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='text'
							className='bg-transparent focus:outline-none h-8 '
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>Email</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='email'
							className='bg-transparent focus:outline-none h-8 '
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>
						TelePhone
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='tel'
							className='bg-transparent focus:outline-none h-8 '
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>
						Country / Region
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							type='text'
							className='bg-transparent focus:outline-none h-8 '
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
				</div>
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>
						Password
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type={see === true ? 'text' : 'password'}
							id='password'
							className='bg-transparent border-overLay focus:outline-none w-4/6 h-8  '
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
				<div className='flex flex-col mx-3    text-lg mb-1'>
					<p className='text-blueOne text-sm font-semibold'>
						Confirm Password
					</p>

					<div className='flex  border-2 border-blueOne '>
						<input
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							type={see === true ? 'text' : 'password'}
							id='conformPassword'
							className='bg-transparent border-overLay   py-2 focus:outline-none w-4/6 h-8  '
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

				<button
					type='submit'
					to='/home/homepage'
					className='bg-blueOne font-medium p-2 text-white text-center w-5/6 rounded-xl justify-center items-center ml-9 text-xl mt-5 '>
					{'Register'}
				</button>

				{/* <div className='flex  justify-end mr-4 mt-3'>
					<button
						to='/recoveremail'
						className=' text-sm text-blueTwo font-bold'>
						Forgotten Password ?{' '}
					</button>
				</div> */}

				{/* the sign up function */}
				<div className='flex flex-col items-end pt-2 mt-1 space-y-1 mr-4'>
					<p className='text-sm text-blueOne'>
						Already have an account ?{' '}
					</p>
					<button className='font-bold text-blueThree'>Log In</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterScreen;
