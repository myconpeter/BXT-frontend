import ComingSoon from '../../components/ComingSoon';
import Menu from '../../components/Menu';

const BookingHomeScreen = () => {
	return (
		<div className='relative bg-lightGray w-screen h-screen'>
			<div>{<Menu PageName='E-Booking' />}</div>

			{<ComingSoon />}
		</div>
	);
};

export default BookingHomeScreen;
