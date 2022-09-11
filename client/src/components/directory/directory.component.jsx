import React, { useState } from "react";
import MenuItem from "../menu_item/menu_item.component";
import {CategoriesStyled} from "./directory.styles";

const initialDirectoryState = {
	sections: [
		{
			title: "hats",
			imageUrl: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			id: 1,
			destination: "hats",
		},
		{
			title: "jackets",
			imageUrl:
				"https://media.istockphoto.com/photos/varsity-jacket-mockup-in-front-and-back-views-picture-id1319570405?k=20&m=1319570405&s=612x612&w=0&h=d1S5EBa0c9bbm6MEoyle3J4oKwl171SskFSrsOuHaAc=",
			id: 2,
			destination: "jackets",
		},
		{
			title: "sneakers",
			imageUrl:
				"https://media.istockphoto.com/photos/closeup-of-athletic-woman-putting-on-sneakers-picture-id1210120932?k=20&m=1210120932&s=612x612&w=0&h=rIVXWNwLGA659sOWBFpcdNxFMerh3cLtsRsah5bRM1A=",
			id: 3,
			destination: "sneakers",
		},
		{
			title: "womens",
			imageUrl:
				"https://media.istockphoto.com/photos/fashion-portrait-pretty-sweet-woman-blowing-red-lips-black-hat-picture-id615595706?k=20&m=615595706&s=612x612&w=0&h=cYHsnlTeLI7JecQ56xwF6otI4bsiYAaKBFYAqCpKV6o=",
			size: "large",
			id: 4,
			destination: "womens",
		},
		{
			title: "mens",
			imageUrl: "https://media.istockphoto.com/photos/macho-man-picture-id1202142519?k=20&m=1202142519&s=612x612&w=0&h=JEzwcn8Ol22l3LIiPGJTNk5uSAW9UQ1OQfA4i0Mopuw=",
			size: "large",
			id: 5,
			destination: "mens",
		},
	],
};


const Directory = () => {
	const [{sections},] = useState(initialDirectoryState);
	return (
		<CategoriesStyled >
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
				))}
		</CategoriesStyled>
	);

}
export default Directory;