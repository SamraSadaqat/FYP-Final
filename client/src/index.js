/*eslint-disable*/
import 'antd/dist/reset.css';
import 'assets/sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";
import Store, { persister } from 'redux/store/configureStore';
import { INTERNAL_SERVER_ERROR } from 'resources/error_handlers';
import App from './App';

ReactDOM.render(
	<Provider store={Store}>
		{/* <PersistGate loading={null} persistor={persister}> */}
		<ErrorBoundary FallbackComponent={INTERNAL_SERVER_ERROR}>
			<App />
		</ErrorBoundary>
		{/* </PersistGate> */}
	</Provider>,

	document.getElementById('root')
);
