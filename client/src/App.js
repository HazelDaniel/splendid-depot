import {
	useEffect,
	createContext,
	useReducer,
	useState,
	useCallback,
	useMemo,
	useRef,
	lazy,
	useLayoutEffect
} from "react";
import "./App.scss";

// import Wrapper from "./components/wrapper/wrapper.component";
// FIREBASE
import { checkLastAuthSession } from "./firebase/firebase.utils";
// UTILS
import { checkForArraysAndReform, reformUserObject, wait } from "./utils";
import { clientCartInitial, clientCartReducer, currentDBcart, __syncCart } from "./reducers/cart.reducer";
import { appReducer, initialAppState, __renderLoader, __renderWelcome, __unmountLoader, __unmountWelcome } from "./reducers/app.reducer";
import { initialShopState, shopReducer } from "./reducers/shop.reducer";
import {useFetchUser} from "./hooks/app/app.use_fetch_user";

// CONTEXT PROVIDERS
import styled, {ThemeProvider} from "styled-components";
import {initialThemeState, themeReducer} from "./reducers/theme.reducer";
import Footer from "./components/footer/footer.component";
import {footerReducer, initialFooterState} from "./reducers/footer.reducer";
import {toast, ToastContainer} from "react-toastify";
import {injectStyle} from "react-toastify/inject-style";

const Wrapper = lazy(()=>import("./components/wrapper/wrapper.component"));

if (typeof window !== "undefined") {
	injectStyle();
}
const ToastContainerStyled = styled(ToastContainer)`
  /** Classes for the displayed toast **/
  .Toastify__toast {
    background-color: ${({theme})=>{
		return theme.$lightBGColor
    }};
    div{
      color: ${({theme})=>{
        return theme.$footerTextColor
      }};
      font-family: montserrat;
      text-transform: capitalize;
      font-size: 1.2rem;
      font-weight: bolder;
      
    }
  }
  .Toastify__progress-bar {
    background: ${({theme})=>{
      return theme.$accentColor
    }};
  }
  /** Used to position the icon **/
  .Toastify__toast-icon {
    svg{
      fill: ${({theme})=>{
        return theme.$accentColor
      }};
    }
  }

  .Toastify__close-button {
    svg{
      fill: ${({theme})=>{
        return theme.$authPrimaryCTAColor
      }};
    }
  }
  .Toastify__progress-bar--error {
    background: ${({theme})=>{
      return theme.accentColor
    }};
  }
`;


export const user = {
	currentUser: null,
};
export const manualAuth = {
	manualSignedIn: 0,
	manualSignIn: () => {},
};
export const cartContext = createContext(clientCartInitial);
export const manualSignInContext = createContext(manualAuth);
export const userContext = createContext({
	...user,
	updateCurrentUser: () => {},
});
export const AppContext = createContext(initialAppState);
export const ShopContext = createContext(initialShopState);
export const FooterContext = createContext(initialFooterState);

const UserProvider = userContext.Provider;
const ManualSignInProvider = manualSignInContext.Provider;
const ClientCartProvider = cartContext.Provider;
const AppProvider = AppContext.Provider;
const ShopProvider = ShopContext.Provider;
const FooterProvider = FooterContext.Provider;


const contextSelector = (callback, state) => {
	return callback(state);
}

const initialThemeChecked = ()=>{
	if(JSON.parse(sessionStorage.getItem("themes"))) {
		return JSON.parse(sessionStorage.getItem("themes"))
	}
	else{
		return initialThemeState
	}
};
const App = (_) => {
	// CONTEXT STATES
	const [currentUser, updateCurrentUser] = useState(user);
	const [clientCartState, clientCartDispatch] = useReducer(clientCartReducer, clientCartInitial);
	const [{ manualSignedIn }, manualSignIn] = useState(manualAuth);
	const [appState, appDispatch] = useReducer(appReducer, initialAppState);
	const [shopState, shopDispatch] = useReducer(shopReducer, initialShopState);
	const initialThemeStateCheckedMemo = useMemo(()=>initialThemeChecked(),[]);
	const [themeState,themeStateDispatch] = useReducer(themeReducer,initialThemeStateCheckedMemo);
	const [footerState,footerStateDispatch] = useReducer(footerReducer,initialFooterState);
	
	const footerRef = useRef(null);
	
	// CONTEXT SELECTORS
	const shopSelector = useCallback((callback) => contextSelector(callback, shopState), [shopState]);

	// CONTEXT PROVIDER VALUES
	const clientCartProviderValue = useMemo(() => ({ clientCartState, clientCartDispatch }), [clientCartState]);
	const userProviderValue = useMemo(() => ({ currentUser, updateCurrentUser }), [currentUser]);
	const appProviderValue = useMemo(() => ({ appState, appDispatch }), [appState]);
	const shopProviderValue = useMemo(() => ({ shopState, shopDispatch,shopSelector }), [shopState,shopSelector]);
	const themeValue = useMemo(()=>{
		return {
			themeState,
			themeStateDispatch
		}
	},[themeState]);
	const footerValue = useMemo(()=>({footerState,footerStateDispatch,footerRef}),[footerState]);
	
	const [lastAuth,setLastAuth] = useState(null);
	const manualSignInValue = useMemo(
		() => ({
			manualSignedIn,
			manualSignIn,
		}),
		[manualSignIn, manualSignedIn]
	);
	const checkLastSignedIn = useCallback(()=> (async _ => {
		try{
			const lastAuthed = await checkLastAuthSession();
			setLastAuth(lastAuthed);
		}catch (err){
			setLastAuth(err);
		}
	})(),[]);
	
	
	
	const {data:checkedData,error:checkedError,isSuccess:checkedIsSuccessful,isError:checkedIsErrored} = useFetchUser(lastAuth?.uid);
	

	const fetchAuthedUserDetails = useCallback(
		() =>
			(async () => {
				if(checkedIsSuccessful){
					// console.log("fetching user auth details")
					// console.log(checkedData);
					
					const {fields} = checkedData.data;
					const reformedUserWithCart = checkForArraysAndReform(reformUserObject(fields));
					clientCartDispatch(__syncCart(reformedUserWithCart));
					currentDBcart.carts = reformedUserWithCart.carts;
					const userData = {
						id: lastAuth.uid,
						...reformedUserWithCart,
						currentUser: lastAuth,
					};
					updateCurrentUser(userData);
				}
			})(),
		[checkedIsSuccessful]
	);

	useEffect(() => {
		//welcome message if the user exists
		// prettier-ignore
		// console.log(currentUser);
		if (!(!!currentUser.currentUser)) return;
		let displayName = currentUser.currentUser?.emailVerified ? currentUser.currentUser.displayName?.trim().split(" ") : currentUser.currentUser? currentUser.displayName?.trim().split(" "): null;
		const checkUserIsWelcome = async () => {
			toast.success(`WELCOME, ${Array.isArray(displayName) ? displayName[displayName.length - 1] : displayName}!`,{
				position: toast.POSITION.BOTTOM_LEFT,
				autoClose: 3000,
				toastId: currentUser.currentUser.id
			})
		};
		(async _ =>checkUserIsWelcome())();
	}, [currentUser, appDispatch]);

	useEffect(() => {
		
		(async () => {
			//checking for the last auth session only when the app mounts (to determine whether user was previously logged in)
			await checkLastSignedIn();
			await fetchAuthedUserDetails();
		})();
	}, [fetchAuthedUserDetails]);

	useEffect(() => {
		(async () => {
			if (!!manualSignedIn) {
				await  checkLastSignedIn();
				await fetchAuthedUserDetails();
			}
		})();
	}, [manualSignedIn, fetchAuthedUserDetails]);

	return (
		<UserProvider value={userProviderValue}>
			<ShopProvider value={shopProviderValue}>
				<ClientCartProvider value={clientCartProviderValue}>
					<ManualSignInProvider value={manualSignInValue}>
						<AppProvider value={appProviderValue}>
							<ThemeProvider theme={themeValue.themeState.theme}>
								<FooterProvider value={footerValue}>
									<Wrapper themeValue={themeValue} />
									<Footer ref={footerRef}/>
								</FooterProvider>
								<ToastContainerStyled/>
							</ThemeProvider>
						</AppProvider>
					</ManualSignInProvider>
				</ClientCartProvider>
			</ShopProvider>
		</UserProvider>
	);
};

export default App;
