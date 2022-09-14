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
import { QueryClient, QueryClientProvider } from "react-query";
import {createGlobalStyle} from "styled-components";
import {ReactQueryDevtools} from "react-query/devtools";


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Autography";
    src: url(${process.env.PUBLIC_URL + `/fonts/Autography.ttf`}) format('truetype');
    font-display: auto;
  }
`;

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus: false,
			retry: (failureCount,error)=>{
				console.log(error);
				return 1;
			},
			keepPreviousData: true
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<GlobalStyles/>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistedStore} loading={<Loader />}>
					<Router>
						<App />
					</Router>
				</PersistGate>
			</Provider>
			{/*<ReactQueryDevtools initialIsOpen={false}/>*/}
		</QueryClientProvider>
	</>
	// {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
