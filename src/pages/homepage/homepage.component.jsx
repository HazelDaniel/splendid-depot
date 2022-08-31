import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
const isEqual = require("lodash.isequal");
const Homepage = React.memo(() => {
	return (
		<div className="home-container">
			<Directory></Directory>
		</div>
	);
}, (prevProps, nextProps) => {
	if (isEqual(prevProps,nextProps)) return true;
	return false;
});
export default Homepage;
