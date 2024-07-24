import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

// menu icons
import { FaHome } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { IoMdInformationCircle } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaQuestionCircle } from 'react-icons/fa';
import { CgMoreO } from 'react-icons/cg';
import { BiSolidContact } from 'react-icons/bi';
import { IoExit } from 'react-icons/io5';
import { MdAdminPanelSettings } from 'react-icons/md';
import { BiSolidWallet } from 'react-icons/bi';

const Menu = (props) => {
	const [nav, setNav] = useState(false);
	const history = useNavigate();

	const links = [
		{
			id: 1,
			link: 'Home',
			ref: '/home',
			tabIcon: <FaHome />,
		},
		{
			id: 2,
			link: 'Dashboard',
			ref: '/dashboard',
			tabIcon: <MdDashboard />,
		},

		{
			id: 3,
			link: 'Wallet',
			ref: '/wallet',
			tabIcon: <BiSolidWallet />,
		},
		{
			id: 4,
			link: 'Settings',
			ref: '/settings',
			tabIcon: <IoSettingsSharp />,
		},

		{
			id: 6,
			link: 'About Us',
			ref: '/about',
			tabIcon: <CgMoreO />,
		},
		{
			id: 7,
			link: 'Contact Us',
			ref: '/about',
			tabIcon: <BiSolidContact />,
		},
	];

	return (
		<div className='fixed z-50 w-fit h-12 max-w-screen -translate-x-1/2  top-0 left-1/2 shadow-md shadow-gray-600 bg-lightGray'>
			<div className='flex items-center justify-between  p-2  h-fit w-screen'>
				<div className=''>
					<button
						onClick={() => history(-1)}
						className=' text-blueOne bg-lightGray   mr-4  text-xl   '>
						{<MdOutlineKeyboardDoubleArrowLeft />}
					</button>
				</div>

				<div className=''>
					<p className='text-2xl font-bold text-center text-blueOne'>
						{props.PageName}
					</p>
				</div>
				<div className=''>
					<button
						onClick={() => setNav(!nav)}
						className=' text-blueOne text-xl  bg-lightGray z-10 relative mr-4'>
						{nav ? <FaTimes /> : <GiHamburgerMenu />}
					</button>
				</div>
			</div>

			{nav && (
				<div className='flex  absolute top-0 left-0 text-white h-36 w-full  '>
					<div
						onClick={() => setNav(!nav)}
						className='w-2/3   h-screen '></div>
					<ul className=' flex  flex-col  w-2/3 bg-lightGray text-blueOne h-screen items-start mt-5'>
						{links.map(({ id, link, ref, tabIcon }) => (
							<li
								key={id}
								className='text-sm capitalize text-overLay py-4 px-4'>
								<Link
									className='flex items-center '
									to={ref}>
									{' '}
									<span className='mx-1'>{tabIcon}</span>{' '}
									{link}
								</Link>
							</li>
						))}
						<li className='text-sm text-danger py-4 px-4'>
							<div className='flex items-center '>
								{' '}
								<span className='mx-1'>
									<IoExit />
								</span>{' '}
								Logout{' '}
							</div>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Menu;
