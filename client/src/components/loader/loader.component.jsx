import React from "react";
import "./loader.styles.scss";
import {useIsFetching} from "react-query";
const Loader = () => {
	const isLoading = useIsFetching({predicate: query=>query.state.status === "loading"});
	return (
		<div className={`loader-div ${!isLoading?"hidden": ""}`}>
			<div className="loader">
				<div className="square" ></div>
				<div className="square"></div>
				<div className="square last"></div>
				<div className="square clear"></div>
				<div className="square"></div>
				<div className="square last"></div>
				<div className="square clear"></div>
				<div className="square "></div>
				<div className="square last"></div>
			</div>
		</div>
	)
}

export default Loader;