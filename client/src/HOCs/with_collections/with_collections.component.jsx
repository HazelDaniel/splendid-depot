
import { ShopContext } from "../../App";

export const WithCollections = (WrappedComponent) => {
	const WithHOC = (props) => {
		return <ShopContext.Consumer>{(context) => <WrappedComponent {...props} collections={context.shopState.collections} shopSelector={context.shopSelector} />}</ShopContext.Consumer>;
	};
	WithHOC.WrappedComponent = WrappedComponent;

	return WithHOC;
};

