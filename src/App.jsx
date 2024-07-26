import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import ForgotPassword from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeLayout from './layout/HomeLayout';
import Dashboard from './screens/Dashboard';
import WalletPageScreen from './screens/WalletPageScreen';
import HomePageScreen from './screens/HomePageScreen';
import SettingsPageScreen from './screens/SettingsPageScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import AirtimePurchase from './screens/AirtimeSection/AirtimePurchase';
import DataPurchase from './screens/AirtimeSection/DataPurchase';
import UtilityBill from './screens/AirtimeSection/UtilityBill';
import IntroScreen from './screens/Edutech/IntroScreen';
import BookingHomeScreen from './screens/E-booking/BookingHomeScreen';
import StakingHomeScreen from './screens/staking/StakingHomeScreen';
import ExchangeHomeScreen from './screens/exchange/ExchangeHomeScreen';
import PeerHomeScreen from './screens/peer-to-peer/PeerHomeScreen';
import BSTHomeScreen from './screens/BST-DEX/BSTHomeScreen';
import MyBooks from './screens/Edutech/MyBooks';
import MyVideos from './screens/Edutech/MyVideos';
import MoreBookDetails from './screens/Edutech/MoreBookDetails';
import MoreCoursesDetails from './screens/Edutech/MoreCoursesDetails';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route
				index
				element={<HomeScreen />}
			/>

			<Route
				path='login'
				element={<LoginScreen />}
			/>

			<Route
				path='register'
				element={<RegisterScreen />}
			/>

			<Route
				path='forgot-password'
				element={<ForgotPassword />}
			/>

			<Route
				path=''
				element={<HomeLayout />}>
				<Route
					path='/home'
					element={<HomePageScreen />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>

				<Route
					path='/wallet'
					element={<WalletPageScreen />}
				/>

				<Route
					path='/settings'
					element={<SettingsPageScreen />}
				/>

				<Route
					path='/about'
					element={<AboutUsScreen />}
				/>

				<Route
					path='/payment-service'
					element={<HomeLayout />}>
					<Route
						path='airtime-purchase'
						element={<AirtimePurchase />}
					/>

					<Route
						path='data-purchase'
						element={<DataPurchase />}
					/>

					<Route
						path='utility-bills'
						element={<UtilityBill />}
					/>
				</Route>

				{/* EDU TECH ACTION */}

				<Route
					path='/edutech'
					element={<HomeLayout />}>
					<Route
						index
						element={<IntroScreen />}
					/>

					<Route
						path='my-books'
						element={<MyBooks />}
					/>

					<Route
						path='my-courses'
						element={<MyVideos />}
					/>
					<Route
						path='more-book-details'
						element={<MoreBookDetails />}
					/>
					<Route
						path='more-course-details'
						element={<MoreCoursesDetails />}
					/>
				</Route>

				{/* Route for E-booking platform */}
				<Route
					index
					path='/e-booking'
					element={<BookingHomeScreen />}></Route>

				{/* Staking Platform */}

				<Route
					index
					path='/staking'
					element={<StakingHomeScreen />}></Route>

				{/* CRYPTO EXPHANGE */}

				<Route
					index
					path='/exchange'
					element={<ExchangeHomeScreen />}></Route>

				<Route
					index
					path='/peer'
					element={<PeerHomeScreen />}></Route>

				<Route
					index
					path='/bst-dex'
					element={<BSTHomeScreen />}></Route>
			</Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
