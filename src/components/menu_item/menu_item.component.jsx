import React from "react";
import "./menu_item.styles.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import { useSelector } from "react-redux";
// import { userSelector } from "../../redux/store";

const MenuItem = ({ title, imageUrl, size, destination,history,...others }) => {
	console.log(others)
	// const user = useSelector(userSelector);
	// console.log(user);
	return(
		<div className={`${size ? size : ""} category`}>
					<div className="cover-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
					<div className="content">
						<p className="title">{title.toUpperCase()}</p>
						<button className="content-cta" onClick={()=>{history.push(`/shop/${destination}`)}}>SHOP NOW</button>
					</div>
				</div>
	)
};

export default withRouter(MenuItem);