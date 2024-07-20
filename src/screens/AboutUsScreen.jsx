import React from 'react';
import Menu from '../components/Menu';
import { MdOutlineContactMail } from 'react-icons/md';

const AboutUsScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='About Us' />}</div>

			<p className='pt-20'>About us screen</p>
		</div>
	);
};

export default AboutUsScreen;
