import { IoHome } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import { MdNotificationAdd } from 'react-icons/md';
import { MdDashboard } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidWallet } from 'react-icons/bi';

const HomeLayout = () => {
	return (
		<div className=''>
			<nav className='relative'>
				<div className='flex item-center justify-between'>
					<div className='fixed z-50 w-fit h-16 max-w-screen shadow-md shadow-gray-600  -translate-x-1/2  p-2 bottom-0 left-1/2 bg-lightGray'>
						<div className='flex w-screen'>
							<div className=' flex flex-col flex-1 items-center justify-center  '>
								<NavLink
									to='/home'
									className={({ isActive }) =>
										isActive
											? ' p-2 text-black flex flex-col items-center'
											: 'p-2 text-blueOne flex flex-col items-center'
									}>
									<IoHome />
									<p className='text-blueOne text-xs'>Home</p>
								</NavLink>
							</div>
							<div className=' flex flex-col flex-1 items-center justify-center  '>
								<NavLink
									to='/dashboard'
									className={({ isActive }) =>
										isActive
											? ' p-2 text-black flex flex-col items-center'
											: 'p-2 text-blueOne flex flex-col items-center'
									}>
									{/* 
                                 reminder for notification change color to red
                                 */}
									<MdDashboard />

									<p className='text-blueOne text-xs'>
										Dashboard
									</p>
								</NavLink>
							</div>
							<div className=' flex flex-col flex-1 items-center justify-center  '>
								<NavLink
									to='/wallet'
									className={({ isActive }) =>
										isActive
											? ' p-2 text-black flex flex-col items-center'
											: 'p-2 text-blueOne flex flex-col items-center'
									}>
									<BiSolidWallet />

									<p className='text-blueOne text-xs'>
										Wallet
									</p>
								</NavLink>
							</div>
							<div className=' flex flex-col flex-1 items-center justify-center  '>
								<NavLink
									to='/settings'
									className={({ isActive }) =>
										isActive
											? ' p-2 text-black flex flex-col items-center'
											: 'p-2 text-blueOne flex flex-col items-center'
									}>
									<IoSettingsSharp />

									<p className='text-blueOne text-xs'>
										Settings
									</p>
								</NavLink>
							</div>
							<div className=' flex flex-col flex-1 items-center justify-center  '>
								<NavLink
									to='/about'
									className={({ isActive }) =>
										isActive
											? ' p-2 text-black flex flex-col items-center'
											: 'p-2 text-blueOne flex flex-col items-center'
									}>
									<FaUser />

									<p className='text-blueOne text-xs'>
										About Us
									</p>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<Outlet />
		</div>
	);
};

export default HomeLayout;
