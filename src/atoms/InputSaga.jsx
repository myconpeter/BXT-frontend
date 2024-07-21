import React, { useState } from 'react';
import Image1 from '../assets/mtn.png';
import Image2 from '../assets/airtel.png';
import Image3 from '../assets/glo.png';
import Image4 from '../assets/NineMobile.png';

const InputSage = () => {
	const [selectedProvider, setSelectedProvider] = useState(null);

	const providers = [
		{ id: 'provider1', imgSrc: Image1, alt: 'MTN' },
		{ id: 'provider2', imgSrc: Image2, alt: 'Airtel' },
		{ id: 'provider3', imgSrc: Image3, alt: 'Provider 3' },
		{ id: 'provider4', imgSrc: Image4, alt: 'Provider 4' },
	];

	const handleProviderChange = (id) => {
		setSelectedProvider(id);
	};

	return (
		<div className='flex flex-col items-center space-x-4 gap-6'>
			<div className='relative inline-block text-left'>
				<div className='block w-full py-2 pl-3 pr-10 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'>
					<div className='flex space-x-2'>
						{providers.map((provider) => (
							<label
								key={provider.id}
								className='cursor-pointer'>
								<input
									type='radio'
									name='provider'
									value={provider.id}
									checked={selectedProvider === provider.id}
									onChange={() =>
										handleProviderChange(provider.id)
									}
									className='hidden'
								/>
								<img
									src={provider.imgSrc}
									alt={provider.alt}
									className={`h-8 w-16 border-2 cursor-pointer ${
										selectedProvider === provider.id
											? 'border-blue-500'
											: 'border-transparent'
									}`}
								/>
							</label>
						))}
					</div>
				</div>
			</div>
			<input
				type='text'
				name='tel'
				id='tel'
				maxLength='11'
				className='border border-gray-300 p-2 rounded-md w-full'
				placeholder='Enter 11-digit number'
			/>
		</div>
	);
};

export default InputSage;
