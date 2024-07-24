import React from 'react';

import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const PeerHomeScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Peer-to-Peer' />}</div>

			{<ComingSoon />}
		</div>
	);
};

export default PeerHomeScreen;
