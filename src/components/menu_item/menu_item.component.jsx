import React from "react";
import "./menu_item.styles.scss";
// import { useSelector } from "react-redux";
// import { userSelector } from "../../redux/store";

export const MenuItem = ({ title, imageUrl, size }) => {
	// const user = useSelector(userSelector);
	// console.log(user);
	return(
		<div className={`${size ? size : ""} category`}>
					<div className="cover-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
					<div className="content">
						<p className="title">{title.toUpperCase()}</p>
						<button className="content-cta">SHOP NOW</button>
					</div>
				</div>
	)
};
