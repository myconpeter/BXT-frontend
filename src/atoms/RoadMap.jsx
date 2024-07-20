const RoadMap = () => {
	return (
		<div className='mx-3 mt-5'>
			<div>
				<p className='text-2xl font-bold text-blueTwo'>Road Map</p>
				<div className='relative flex mt-3 gap-1 justify-center'>
					<div className='bg-blueOne p-1 w-1/4 h-28 rounded-xl'>
						<p className='text-white font-bold text-sm'>
							3rd Quarter
						</p>
						<div className='text-white text-xs '>
							<p>- Data / Utility bill Payment </p>
							<p>- Edutech Skills acquisition program </p>
						</div>
					</div>

					<div className='bg-blueOne p-1 w-1/4 h-28 rounded-xl'>
						<p className='text-white font-bold text-sm'>
							4th Quarter
						</p>
						<div className='text-white text-xs '>
							<p>- E-Booking </p>
							<p>- Staking Platform </p>
						</div>
					</div>

					<div className='bg-blueOne p-1 w-1/4 h-28 rounded-xl'>
						<p className='text-white font-bold text-sm'>
							1st Quarter
						</p>
						<div className='text-white text-xs '>
							<p>-Crypto-to-fiat exchange </p>
							<p>- Peer-to-Peer </p>
						</div>
					</div>

					<div className='bg-blueOne p-1 w-1/4 h-28 rounded-xl'>
						<p className='text-white font-bold text-sm'>
							2nd Quarter
						</p>
						<div className='text-white text-xs '>
							<p>- BST DEX </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoadMap;
