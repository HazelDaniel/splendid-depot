
import { ShopContext } from "../../App";

// export const WithCollections = WrappedComponent => {
// 	const { shopState } = useContext(ShopContext);
// 	// console.log(collections);

// 	return (props) => {
// 		return <WrappedComponent {...props} collections={shopState.collections} />
// 	}
// };


export const WithCollections = (WrappedComponent) => {
	const WithHOC = (props) => {
		return <ShopContext.Consumer>{(context) => <WrappedComponent {...props} collections={context.shopState.collections} shopSelector={context.shopSelector} />}</ShopContext.Consumer>;
	};
	WithHOC.WrappedComponent = WrappedComponent;

	return WithHOC;
};


// export const WithCollections = WrappedComponent => {
// 	return (
// 		<ShopContext.Consumer>
// 			<WrappedComponent {...props} collections={collections} />
// 		</ShopContext.Consumer>
// 	);

// };