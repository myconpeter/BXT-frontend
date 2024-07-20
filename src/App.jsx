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
			</Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
