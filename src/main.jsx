import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './css/style.css';
import './css/styles.css';
import './css/team-style.css';
import 'font-awesome/css/font-awesome.min.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter
			future={{
				v7_relativeSplatPath: true,
				v7_startTransition: true,
			}}
		>
			<App />
		</BrowserRouter>
	</StrictMode>
);
