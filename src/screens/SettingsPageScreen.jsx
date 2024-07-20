import React from 'react';
import Menu from '../components/Menu';

const SettingsPageScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='Settings' />}</div>
		</div>
	);
};

export default SettingsPageScreen;
