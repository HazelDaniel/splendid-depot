import { createSlice } from "@reduxjs/toolkit";

// const imagePath = `../../../src/assets/images/`;

// console.log(window.location.origin);

export const COLLECTION_DATA = [
	{
		id: 1,
		title: "hats",
		routeName: "/hats",
		items: [
			{
				id: 1,
				name: "HAZEL BRIN",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1087614924-612x612.jpg`}`,
				price: "$35",
			},
			{
				id: 2,
				name: "BROWN BINNI",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1333346342-612x612.jpg`}`,
				price: "$70",
			},
			{
				id: 3,
				name: "LOREY BERETTH",
				imageUrl: `${`${window.location.origin}/images/istockphoto-958976134-612x612.jpg`}`,
				price: "$15",
			},
			{
				id: 4,
				name: "OKAY Hats",
				imageUrl: `${`${window.location.origin}/images/istockphoto-913995850-612x612.jpg`}`,
				price: "$22",
			},
			{
				id: 5,
				name: "Blue beans",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1139134900-612x612.jpg`}`,
				price: "$25",
			},
			{
				id: 6,
				name: "gothic habit",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1286817454-612x612.jpg`}`,
				price: "$25",
			},
			{
				id: 7,
				name: "high hike",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1335009879-612x612.jpg`}`,
				price: "$45",
			},
		],
	},
	{
		id: 2,
		title: "jackets",
		routeName: "/jackets",
		items: [
			{
				id: 1,
				name: "elixir TM",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1290693366-612x612.jpg`}`,
				price: "$70",
			},
			{
				id: 2,
				name: "jules XL",
				imageUrl: `${`${window.location.origin}/images/istockphoto-171241451-612x612.jpg`}`,
				price: "$90",
			},
			{
				id: 3,
				name: "paid mason (black)",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1260163163-612x612.jpg`}`,
				price: "$55",
			},
			{
				id: 4,
				name: "huggo XL",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1307096796-612x612.jpg`}`,
				price: "$60",
			},
			{
				id: 5,
				name: "evada",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1354251572-612x612.jpg`}`,
				price: "$79.9",
			},
			{
				id: 6,
				name: "bobby jackets",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1305253946-612x612.jpg`}`,
				price: "$79.9",
			},
		],
	},
	{
		id: 3,
		title: "sneakers",
		routeName: "/sneakers",
		items: [
			{
				id: 1,
				name: "manniq TM",
				imageUrl: `${`${window.location.origin}/images/istockphoto-155096664-612x612.jpg`}`,
				price: "$38",
			},
			{
				id: 2,
				name: "ruffus Airforce 5",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1016795960-612x612.jpg`}`,
				price: "$75",
			},
			{
				id: 3,
				name: "make M TX",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1358001285-612x612.jpg`}`,
				price: "$53",
			},
			{
				id: 4,
				name: "volsik jordan",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1256340427-612x612.jpg`}`,
				price: "$90",
			},
			{
				id: 5,
				name: "curdine GL 45",
				imageUrl: `${`${window.location.origin}/images/istockphoto-1277154970-612x612.jpg`}`,
				price: "$90",
			},
			{
				id: 6,
				name: "no nile (black)",
				imageUrl: `https://media.istockphoto.com/photos/sneaker-close-up-picture-id615085330?k=20&m=615085330&s=612x612&w=0&h=s9t86sgY07H_8ZSNwcvADUgfZcdKSMMXTXl1Gr3eDsE=`,
				price: "$55",
			},
			{
				id: 7,
				name: "yikes 3S",
				imageUrl: `https://media.istockphoto.com/photos/new-unbranded-sport-shoes-isolated-on-white-background-picture-id904145880?k=20&m=904145880&s=612x612&w=0&h=HH5DIk-dd_WJDIzJvIxhTPTMA_mN9hRHnQ97X1Y1rD8=`,
				price: "$80",
			},
		],
	},
	{
		id: 4,
		title: "women's",
		routeName: "/women",
		items: [
			{
				id: 1,
				name: "glamoria",
				imageUrl: `https://media.istockphoto.com/photos/closeup-of-beautiful-sexy-female-model-inside-the-water-at-the-beach-picture-id1305407974?k=20&m=1305407974&s=612x612&w=0&h=i0KVWqTc3g_82bboJuaj7ZSIEWqZElT9NFtobENK12k=`,
				price: "$50",
			},
			{
				id: 2,
				name: "hive 2",
				imageUrl: `${`${window.location.origin}/images/istockphoto-922660816-612x612.jpg`}`,
				price: "$55",
			},
			{
				id: 3,
				name: "morgan hughes",
				imageUrl: `${`${window.location.origin}/images/istockphoto-478386093-612x612.jpg`}`,
				price: "$30",
			},
			{
				id: 4,
				name: "VV montana",
				imageUrl: `${window.location.origin}/images/istockphoto-534000387-612x612.jpg`,
				price: "$68",
			},
			{
				id: 5,
				name: "Lolita",
				imageUrl: `${window.location.origin}/images/istockphoto-1137630225-612x612.jpg`,
				price: "$45",
			},
			{
				id: 6,
				name: "paul raverri",
				imageUrl: `${window.location.origin}/images/istockphoto-1387420496-612x612.jpg`,
				price: "$55",
			},
			{
				id: 7,
				name: "coffee lux",
				imageUrl: `${window.location.origin}/images/istockphoto-1405863525-612x612.jpg`,
				price: "$75",
			},
		],
	},
	{
		id: 5,
		title: "men's",
		routeName: "/men",
		items: [
			{
				id: 1,
				name: "coult XXL",
				imageUrl: `https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
				price: "$102",
			},
			{
				id: 2,
				name: "denim ontario",
				imageUrl: `${window.location.origin}/images/istockphoto-538880747-612x612.jpg`,
				price: "$100",
			},
			{
				id: 3,
				name: "mavarts XL",
				imageUrl: `https://media.istockphoto.com/photos/young-man-urban-summer-designer-tshirt-fashion-portrait-picture-id1304442659?k=20&m=1304442659&s=612x612&w=0&h=FER5XmL2ax3JH8RAKFRlSgo3VCO1fqIfKD7oIszX1Xg=`,
				price: "$88",
			},
			{
				id: 4,
				name: "cole tim S",
				imageUrl: `https://media.istockphoto.com/photos/young-adult-man-on-coastline-picture-id1333785100?k=20&m=1333785100&s=612x612&w=0&h=fu16GNZLpjefjqxvKga0Zo-MEVS1WpXw_h2B0v0dQWY=`,
				price: "$75",
			},
			{
				id: 5,
				name: "no labelz",
				imageUrl: `https://media.istockphoto.com/photos/man-in-blank-black-tshirt-picture-id916197610?k=20&m=916197610&s=612x612&w=0&h=xB4vClFjJflklJl5kvLu5MsTdw4zxfbcyFF4GTDizVY=`,
				price: "$121",
			},
			{
				id: 6,
				name: "street law",
				imageUrl: `https://media.istockphoto.com/photos/rear-view-of-young-afro-american-man-picture-id1065779614?k=20&m=1065779614&s=612x612&w=0&h=UZ3OypLne1EE8svkgxPeIELjn4P9onKWQNHEdKoAMAI=`,
				price: "$79",
			},
			{
				id: 7,
				name: "versace miles",
				imageUrl: `https://media.istockphoto.com/photos/businessman-buttoning-his-shirt-low-key-picture-id483713752?k=20&m=483713752&s=612x612&w=0&h=HJyv2EQR0bHbsrJLkgxPiHmkea7ciF8iOsR4pp-gsoQ=`,
				price: "52.35",
			},
		],
	},
];

const INITIAL_STATE = {
	collections: COLLECTION_DATA
}

const ShopSlice = createSlice({
	name: "shop",
	initialState: INITIAL_STATE,
	reducers: {
		
	}
})



export default ShopSlice.reducer;