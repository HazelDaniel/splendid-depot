import React from "react";
import "./menu_item.styles.scss";
export const MenuItem = ({ title,imageUrl, size }) => (
		<div className={`${size ? size : ""} category`}>
					<div className="cover-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
					<div className="content">
						<p className="title">{title.toUpperCase()}</p>
						<button className="content-cta">SHOP NOW</button>
					</div>
				</div>
);
