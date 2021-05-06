import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
//import { MemoryRouter } from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
	
		<StateProvider initialState={initialState} reducer={reducer}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		</StateProvider>,
	document.getElementById('root')
);
serviceWorker.unregister();
