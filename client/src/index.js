import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store";
import Loader from "./components/loader/loader.component";
import { global as GlobalStyle } from "./components/styles/root/root.styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<>
		<GlobalStyle />
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistedStore} loading={<Loader />}>
					<Router>
						<App />
					</Router>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</>
	// {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
