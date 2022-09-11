import React from "react";
import Directory from "../../components/directory/directory.component";
import {HomePageStyled} from "./homepage.styles";
const isEqual = require("lodash.isequal");
const Homepage = React.memo(() => {
	return (
		<HomePageStyled>
			<Directory></Directory>
		</HomePageStyled>
	);
}, (prevProps, nextProps) => {
	if (isEqual(prevProps,nextProps)) return true;
	return false;
});
export default Homepage;
