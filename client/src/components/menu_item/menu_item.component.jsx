import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {CategoryStyled} from "../directory/directory.styles";


const MenuItem = ({ title, imageUrl, size, destination,...others }) => {
	const history = useHistory();
	return(
		<CategoryStyled $size={size}>
			<div className="cover-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
			<div className="content">
				<p className="title">{title.toUpperCase()}</p>
				<button className="content-cta" onClick={()=>{history.push(`/shop/${destination}`)}}>SHOP NOW</button>
			</div>
		</CategoryStyled>
	);
};


export default MenuItem;