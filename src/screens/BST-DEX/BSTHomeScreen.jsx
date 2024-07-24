import React from 'react';

import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const BSTHomeScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='BST DEX' />}</div>

			{<ComingSoon />}
		</div>
	);
};

export default BSTHomeScreen;
