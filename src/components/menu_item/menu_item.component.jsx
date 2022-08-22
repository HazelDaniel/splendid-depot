import React from "react";
import "./menu_item.styles.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const MenuItem = ({ title, imageUrl, size, destination,...others }) => {
	const history = useHistory();
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


export default MenuItem;