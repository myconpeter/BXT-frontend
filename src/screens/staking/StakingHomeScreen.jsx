import React from 'react';

import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const StakingHomeScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Staking Platform' />}</div>

			{<ComingSoon />}
		</div>
	);
};

export default StakingHomeScreen;
