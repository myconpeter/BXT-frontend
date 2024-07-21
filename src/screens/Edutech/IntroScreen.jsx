import React from 'react';
import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const IntroScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Edutech' />}</div>

			<ComingSoon />
		</div>
	);
};

export default IntroScreen;
