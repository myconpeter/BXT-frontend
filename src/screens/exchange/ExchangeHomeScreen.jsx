import React from 'react';

import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const ExchangeHomeScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Crypto Exchange' />}</div>

			{<ComingSoon />}
		</div>
	);
};

export default ExchangeHomeScreen;
