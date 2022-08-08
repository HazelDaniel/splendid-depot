import React from "react";
import "./loader.styles.scss";
const Loader = props => {
	return (
		<div className="loader-div">
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