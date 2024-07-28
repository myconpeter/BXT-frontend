import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useSpring, animated } from '@react-spring/web';
import {
	FaMobileAlt,
	FaBook,
	FaDollarSign,
	FaExchangeAlt,
} from 'react-icons/fa';
import { GiPayMoney, GiTeacher, GiTrade } from 'react-icons/gi';
import { IoMdLaptop } from 'react-icons/io';

const HomeScreen = () => {
	// Spring animations
	const logoAnimation = useSpring({
		from: { transform: 'translateY(-50px)', opacity: 0 },
		to: { transform: 'translateY(0)', opacity: 1 },
		config: { tension: 170, friction: 26 },
		delay: 300,
	});

	const buttonAnimation = useSpring({
		from: { transform: 'scale(0.9)', opacity: 0 },
		to: { transform: 'scale(1)', opacity: 1 },
		config: { tension: 170, friction: 20 },
		delay: 600000,
	});

	const textAnimation = useSpring({
		from: { transform: 'translateY(50px)', opacity: 0 },
		to: { transform: 'translateY(0)', opacity: 1 },
		config: { tension: 170, friction: 20 },
		delay: 900,
	});

	const iconAnimation = useSpring({
		from: { opacity: 0 },
		to: { opacity: 0.2 },
		config: { tension: 170, friction: 20 },
		delay: 1200,
	});

	const icons = [
		{
			icon: FaMobileAlt,
			key: 'vtu',
			position: { top: '10%', left: '10%' },
			color: 'red',
		},
		{
			icon: GiPayMoney,
			key: 'bills',
			position: { top: '20%', left: '80%' },
			color: 'green',
		},
		{
			icon: IoMdLaptop,
			key: 'e-courses',
			position: { top: '30%', left: '30%' },
			color: 'blue',
		},
		{
			icon: GiTeacher,
			key: 'e-learning',
			position: { top: '40%', left: '70%' },
			color: 'purple',
		},
		{
			icon: FaDollarSign,
			key: 'dollar',
			position: { top: '50%', left: '20%' },
			color: 'orange',
		},
		{
			icon: FaExchangeAlt,
			key: 'services',
			position: { top: '60%', left: '60%' },
			color: 'teal',
		},

		{
			icon: GiTrade,
			key: 'peer',
			position: { top: '80%', left: '50%' },
			color: 'yellow',
		},
		{
			icon: FaBook,
			key: 'e-booking',
			position: { top: '90%', left: '30%' },
			color: 'brown',
		},
	];

	return (
		<div className='h-screen w-full overflow-hidden bg-fixed bg-white relative'>
			<div className='flex h-full justify-center'>
				<div className='relative flex flex-col items-center'>
					<animated.img
						style={logoAnimation}
						className='h-[30rem] w-96 z-0'
						src={logo}
						alt='micheal'
					/>

					<div className='z-10 flex flex-col bottom-0 items-center'>
						<animated.div style={buttonAnimation}>
							<Link to='/login'>
								<button className='text-blueOne text-2xl font-serif font-bold flex cursor-pointer'>
									ENTER INTO THE
									<span className='text-black ml-5'>
										{/* <FaLocationArrow className='text-overLay rotate-45' /> */}
										{/* <GiPlainArrow className='text-overLay rotate-45' /> */}
									</span>
								</button>
							</Link>
						</animated.div>

						<animated.div
							style={textAnimation}
							className='mt-4'>
							<Link to='/login'>
								<p className='text-4xl font-extrabold text-white font-serif bg-blueOne rounded-lg p-5'>
									TECH WORLD
								</p>
							</Link>
						</animated.div>
					</div>
				</div>
			</div>
			{/* Icon animations */}
			<div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
				{icons.map(({ icon: Icon, key, position, color }) => (
					<animated.div
						key={key}
						style={{
							...iconAnimation,
							position: 'absolute',
							...position,
							color,
						}}
						className=' '>
						<Icon
							size={50}
							className='opacity-[2px]'
						/>
					</animated.div>
				))}
			</div>
		</div>
	);
};

export default HomeScreen;
