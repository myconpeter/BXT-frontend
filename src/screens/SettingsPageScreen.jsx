import React from 'react';
import Menu from '../components/Menu';
import { MdOutlineContactMail } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { GiPadlockOpen } from 'react-icons/gi';

import { MdOutlineContactPhone } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { HiDocumentText } from 'react-icons/hi2';

import { BiLogOut } from 'react-icons/bi';

const SettingsPageScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Settings' />}</div>

			<div className='relative pt-16'>
				<div>
					<div className='space-y-1'>
						<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
							<div className='flex items-center gap-3'>
								<MdOutlineContactMail className='text-xl' />
								<p className='text-lg'>Update Profile</p>
							</div>

							<IoIosArrowForward className='text-xl' />
						</div>

						<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
							<div className='flex items-center gap-3'>
								<GiPadlockOpen className='text-xl' />
								<p className='text-lg'>Change Password</p>
							</div>

							<IoIosArrowForward className='text-xl' />
						</div>

						<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
							<div className='flex items-center gap-3'>
								<MdDashboard className='text-xl' />
								<p className='text-lg'>Dashboard</p>
							</div>

							<IoIosArrowForward className='text-xl' />
						</div>
					</div>

					<div className='mt-3'>
						<p className='text-lg text-blueOne font-bold text-center mb-2'>
							Support & Contact
						</p>

						<div className='space-y-1'>
							<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
								<div className='flex items-center gap-3'>
									<MdOutlineContactPhone className='text-xl' />
									<p className='text-lg'>Contact Support</p>
								</div>

								<IoIosArrowForward className='text-xl' />
							</div>

							<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
								<div className='flex items-center gap-3'>
									<FaTelegram className='text-xl' />
									<p className='text-lg'>Telegram</p>
								</div>

								<IoIosArrowForward className='text-xl' />
							</div>

							<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
								<div className='flex items-center gap-3'>
									<FaFacebook className='text-xl' />
									<p className='text-lg'>Facebook</p>
								</div>

								<IoIosArrowForward className='text-xl' />
							</div>
						</div>
					</div>

					<div className='mt-3'>
						<p className='text-lg text-blueOne font-bold text-center mb-2'>
							About
						</p>

						<div className='space-y-10'>
							<div className='flex items-center justify-between mx-4 text-blueOne font-bold shadow-sm shadow-gray-700 p-2'>
								<div className='flex items-center gap-3'>
									<HiDocumentText className='text-xl' />
									<p className='text-xl'>Terms of Use</p>
								</div>

								<IoIosArrowForward className='text-lg' />
							</div>

							<div className='flex items-center justify-between mx-4 text-red-700 font-bold shadow-sm shadow-gray-700 p-2'>
								<div className='flex items-center gap-3'>
									<BiLogOut className='text-xl' />
									<p className='text-lg'>Logout</p>
								</div>

								<IoIosArrowForward className='text-xl' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPageScreen;
