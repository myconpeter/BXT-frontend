import React, { useState } from 'react';

const InputSage = () => {
	const [selectedProvider, setSelectedProvider] = useState(null);

	const providers = [
		{ id: 'provider1', imgSrc: 'provider1.jpg', alt: 'Provider 1' },
		{ id: 'provider2', imgSrc: 'provider2.jpg', alt: 'Provider 2' },
		{ id: 'provider3', imgSrc: 'provider3.jpg', alt: 'Provider 3' },
		{ id: 'provider4', imgSrc: 'provider4.jpg', alt: 'Provider 4' },
	];

	const handleProviderChange = (event) => {
		setSelectedProvider(event.target.value);
	};

	return (
		<div className='flex items-center space-x-4'>
			<div className='relative inline-block text-left'>
				<select
					className='block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
					onChange={handleProviderChange}
					value={selectedProvider}>
					<option
						value=''
						disabled>
						Select Provider
					</option>
					{providers.map((provider) => (
						<option
							key={provider.id}
							value={provider.id}></option>
					))}
				</select>
				<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
					{selectedProvider && (
						<img
							src={
								providers.find(
									(provider) =>
										provider.id === selectedProvider
								)?.imgSrc
							}
							alt={
								providers.find(
									(provider) =>
										provider.id === selectedProvider
								)?.alt
							}
							className='h-6 w-6'
						/>
					)}
				</div>
			</div>
			<input
				type='text'
				name='tel'
				id='tel'
				maxLength='11'
				className='border border-gray-300 p-2 rounded-md w-48'
				placeholder='Enter 11-digit number'
			/>
		</div>
	);
};

export default InputSage;
