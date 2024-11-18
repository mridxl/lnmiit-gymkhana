import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
