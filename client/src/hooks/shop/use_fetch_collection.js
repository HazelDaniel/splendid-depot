

// const



import {projectId} from "../../firebase/firebase.utils";
import {useQuery} from "react-query"
import axios from "axios";
import isEqual from "lodash.isequal";
import {reformUserObject,checkForArraysAndReform} from "../../utils";

 const fetchCollections = ({queryKey}) => {
	 return axios.get(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${queryKey}`).catch(err=>{
		throw err;
	})
};
 
 export const useFetchCollections = _ => {
	 const key = "collections"
	 return useQuery({
		 queryKey: key,
		 queryFn: fetchCollections,
		 staleTime: 250000,
		 keepPreviousData: true,
		 cacheTime: 500000,
		 enabled: false,
	 })
 }
 
 const data = [
	 {
		 "name": "projects/splendid-depot-2/databases/(default)/documents/collections/5L2Lf8tVQ4KHkTa6sYTp",
		 "fields": {
			 "title": {
				 "stringValue": "Hats"
			 },
			 "id": {
				 "stringValue": "AXYOJYITLJsU-JDtIJQD0"
			 },
			 "routeName": {
				 "stringValue": "hats"
			 },
			 "items": {
				 "arrayValue": {
					 "values": [
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "qq_ugtdykFU90WlW5-xno"
									 },
									 "price": {
										 "integerValue": "25"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/ZYW3VTp/brown-brim.png"
									 },
									 "name": {
										 "stringValue": "Brown Brim"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Blue Beanie"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/ypkgK0X/blue-beanie.png"
									 },
									 "price": {
										 "integerValue": "18"
									 },
									 "id": {
										 "stringValue": "SFQLKaQL9w3fDbFbsETyJ"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "Dm99GI5_2JvRNqEYB4WKB"
									 },
									 "name": {
										 "stringValue": "Brown Cowboy"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/QdJwgmp/brown-cowboy.png"
									 },
									 "price": {
										 "integerValue": "35"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "8GFUtt5nMFUNdXI-N0i6l"
									 },
									 "price": {
										 "integerValue": "25"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/RjBLWxB/grey-brim.png"
									 },
									 "name": {
										 "stringValue": "Grey Brim"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Green Beanie"
									 },
									 "id": {
										 "stringValue": "5uVtwYQP67gCyCYa7hZCZ"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/YTjW3vF/green-beanie.png"
									 },
									 "price": {
										 "integerValue": "18"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "14"
									 },
									 "id": {
										 "stringValue": "1AAl4wZ86ygT6Q1wnGDlA"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png"
									 },
									 "name": {
										 "stringValue": "Palm Tree Cap"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "18"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/bLB646Z/red-beanie.png"
									 },
									 "name": {
										 "stringValue": "Red Beanie"
									 },
									 "id": {
										 "stringValue": "8b2Vro8n_ja8TqYvRbOpn"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "14"
									 },
									 "id": {
										 "stringValue": "c7XZ7U_qr4nL3_dqugJvI"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/1f2nWMM/wolf-cap.png"
									 },
									 "name": {
										 "stringValue": "Wolf Cap"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/X2VJP2W/blue-snapback.png"
									 },
									 "id": {
										 "stringValue": "YIQTeYc84PzHuMaNZy3l0"
									 },
									 "name": {
										 "stringValue": "Blue Snapback"
									 },
									 "price": {
										 "integerValue": "16"
									 }
								 }
							 }
						 }
					 ]
				 }
			 }
		 },
		 "createTime": "2022-09-02T20:18:48.764426Z",
		 "updateTime": "2022-09-02T20:18:48.764426Z"
	 },
	 {
		 "name": "projects/splendid-depot-2/databases/(default)/documents/collections/JcersaLd4pEKSsQWMS6F",
		 "fields": {
			 "id": {
				 "stringValue": "g0pxaI0H7SJJ3JL1Movdr"
			 },
			 "items": {
				 "arrayValue": {
					 "values": [
						 {
							 "mapValue": {
								 "fields": {
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/7CQVJNm/blue-tank.png"
									 },
									 "id": {
										 "stringValue": "IlcCe5H4LGaQKvSyi511n"
									 },
									 "name": {
										 "stringValue": "Blue Tanktop"
									 },
									 "price": {
										 "integerValue": "25"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Floral Blouse"
									 },
									 "id": {
										 "stringValue": "oNQJMAzKw4aYxSds9W5ow"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/4W2DGKm/floral-blouse.png"
									 },
									 "price": {
										 "integerValue": "20"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "80"
									 },
									 "id": {
										 "stringValue": "tGaEp8VqyrDQx5QbL41z1"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/KV18Ysr/floral-skirt.png"
									 },
									 "name": {
										 "stringValue": "Floral Dress"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "80"
									 },
									 "name": {
										 "stringValue": "Red Dots Dress"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
									 },
									 "id": {
										 "stringValue": "PI_XMR6XdvnL88Lw4xtXS"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "85tiIpawFP04l10BvBXYx"
									 },
									 "name": {
										 "stringValue": "Striped Sweater"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/KmSkMbH/striped-sweater.png"
									 },
									 "price": {
										 "integerValue": "45"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "2QAYnPMNeOKU9Z4dtxsA-"
									 },
									 "name": {
										 "stringValue": "Yellow Track Suit"
									 },
									 "price": {
										 "integerValue": "135"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/v1cvwNf/yellow-track-suit.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "20"
									 },
									 "name": {
										 "stringValue": "White Blouse"
									 },
									 "id": {
										 "stringValue": "Q0pA4OtgUeoXqlS5SPu5W"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/qBcrsJg/white-vest.png"
									 }
								 }
							 }
						 }
					 ]
				 }
			 },
			 "title": {
				 "stringValue": "Womens"
			 },
			 "routeName": {
				 "stringValue": "womens"
			 }
		 },
		 "createTime": "2022-09-02T20:18:48.764426Z",
		 "updateTime": "2022-09-02T20:18:48.764426Z"
	 },
	 {
		 "name": "projects/splendid-depot-2/databases/(default)/documents/collections/Nyo1lre7Lz3gsAp0C5mA",
		 "fields": {
			 "routeName": {
				 "stringValue": "sneakers"
			 },
			 "title": {
				 "stringValue": "Sneakers"
			 },
			 "id": {
				 "stringValue": "ELNZBYXk8R5jl-Nb8W5ye"
			 },
			 "items": {
				 "arrayValue": {
					 "values": [
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "220"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
									 },
									 "name": {
										 "stringValue": "Adidas NMD"
									 },
									 "id": {
										 "stringValue": "CM0iJY9xYxWTZjFqBItYS"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "280"
									 },
									 "name": {
										 "stringValue": "Adidas Yeezy"
									 },
									 "id": {
										 "stringValue": "-tHKlPwIsZDCquNHDOiTV"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/dJbG1cT/yeezy.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/bPmVXyP/black-converse.png"
									 },
									 "id": {
										 "stringValue": "yd1SwIWw_wMl1vuoGm0vI"
									 },
									 "price": {
										 "integerValue": "110"
									 },
									 "name": {
										 "stringValue": "Black Converse"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "FHxRf9VmXpAIFDd83E_jc"
									 },
									 "name": {
										 "stringValue": "Nike White AirForce"
									 },
									 "price": {
										 "integerValue": "160"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "160"
									 },
									 "name": {
										 "stringValue": "Nike Red High Tops"
									 },
									 "id": {
										 "stringValue": "m0od_McQdhoKg5IY8TrFP"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/QcvzydB/nikes-red.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "8QpsSLjpMqwifga64TjOX"
									 },
									 "name": {
										 "stringValue": "Nike Brown High Tops"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/fMTV342/nike-brown.png"
									 },
									 "price": {
										 "integerValue": "160"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Air Jordan Limited"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/w4k6Ws9/nike-funky.png"
									 },
									 "id": {
										 "stringValue": "3rcTA1xTwlZAB7CN4m6ku"
									 },
									 "price": {
										 "integerValue": "190"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "200"
									 },
									 "id": {
										 "stringValue": "mum4k4Ty9HGHGM-poyyjS"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/Mhh6wBg/timberlands.png"
									 },
									 "name": {
										 "stringValue": "Timberlands"
									 }
								 }
							 }
						 }
					 ]
				 }
			 }
		 },
		 "createTime": "2022-09-02T20:18:48.764426Z",
		 "updateTime": "2022-09-02T20:18:48.764426Z"
	 },
	 {
		 "name": "projects/splendid-depot-2/databases/(default)/documents/collections/PbuOfzirZGPq753Nkg17",
		 "fields": {
			 "id": {
				 "stringValue": "qBuKa2pNoO2h-muf6x1UO"
			 },
			 "routeName": {
				 "stringValue": "jackets"
			 },
			 "items": {
				 "arrayValue": {
					 "values": [
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "CoK4yUsbw6U9Lrkgg5gVq"
									 },
									 "name": {
										 "stringValue": "Black Jean Shearling"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/XzcwL5s/black-shearling.png"
									 },
									 "price": {
										 "integerValue": "125"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
									 },
									 "id": {
										 "stringValue": "mmTdBU1g2k6ey4WOsVVzA"
									 },
									 "price": {
										 "integerValue": "90"
									 },
									 "name": {
										 "stringValue": "Blue Jean Jacket"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "PVyXa7D0BpN8gYiTMqlH6"
									 },
									 "price": {
										 "integerValue": "90"
									 },
									 "name": {
										 "stringValue": "Grey Jean Jacket"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/N71k1ML/grey-jean-jacket.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "165"
									 },
									 "name": {
										 "stringValue": "Brown Shearling"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/s96FpdP/brown-shearling.png"
									 },
									 "id": {
										 "stringValue": "6LNpK9O3soBdRVKmqibSv"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Tan Trench"
									 },
									 "id": {
										 "stringValue": "7MLVw994Wd2Fu9Ajt9ePC"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/M6hHc3F/brown-trench.png"
									 },
									 "price": {
										 "integerValue": "185"
									 }
								 }
							 }
						 }
					 ]
				 }
			 },
			 "title": {
				 "stringValue": "Jackets"
			 }
		 },
		 "createTime": "2022-09-02T20:18:48.764426Z",
		 "updateTime": "2022-09-02T20:18:48.764426Z"
	 },
	 {
		 "name": "projects/splendid-depot-2/databases/(default)/documents/collections/SzeMU9SF7JMBO3R6x3pk",
		 "fields": {
			 "routeName": {
				 "stringValue": "mens"
			 },
			 "items": {
				 "arrayValue": {
					 "values": [
						 {
							 "mapValue": {
								 "fields": {
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/xJS0T3Y/camo-vest.png"
									 },
									 "price": {
										 "integerValue": "325"
									 },
									 "id": {
										 "stringValue": "13zuJwoT0XvgOxLIMs1UC"
									 },
									 "name": {
										 "stringValue": "Camo Down Vest"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "20"
									 },
									 "name": {
										 "stringValue": "Floral T-shirt"
									 },
									 "id": {
										 "stringValue": "pt-_CEfD6GCQqfXKVHSmJ"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/qMQ75QZ/floral-shirt.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "id": {
										 "stringValue": "Ck6DHWGpB3HzzlnV959vT"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/55z32tw/long-sleeve.png"
									 },
									 "price": {
										 "integerValue": "25"
									 },
									 "name": {
										 "stringValue": "Black & White Longsleeve"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Pink T-shirt"
									 },
									 "price": {
										 "integerValue": "25"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/RvwnBL8/pink-shirt.png"
									 },
									 "id": {
										 "stringValue": "fsQQ_JJ_hvQvlpg6PCqpe"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "price": {
										 "integerValue": "40"
									 },
									 "name": {
										 "stringValue": "Jean Long Sleeve"
									 },
									 "id": {
										 "stringValue": "-JHGGY6iJBPq9MuQimbFZ"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
									 }
								 }
							 }
						 },
						 {
							 "mapValue": {
								 "fields": {
									 "name": {
										 "stringValue": "Burgundy T-shirt"
									 },
									 "price": {
										 "integerValue": "25"
									 },
									 "id": {
										 "stringValue": "6UVVjwOh9IsWjcps6YDSz"
									 },
									 "imageUrl": {
										 "stringValue": "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png"
									 }
								 }
							 }
						 }
					 ]
				 }
			 },
			 "id": {
				 "stringValue": "Rl4naJoihiMCZ-8FzjtJ4"
			 },
			 "title": {
				 "stringValue": "Mens"
			 }
		 },
		 "createTime": "2022-09-02T20:18:48.764426Z",
		 "updateTime": "2022-09-02T20:18:48.764426Z"
	 }
 ];
// const checkForArraysAndReform = (data) => {
// 	const modifiedData = Object.fromEntries(
// 		Object.entries(data).map(([key, value]) => {
// 			const valueChecked = !!value.values ? value.values.map(obj => reformUserObject(obj.mapValue.fields)) :key==="items" && isEqual(value,{})?[]: value;
//
// 			return [key,valueChecked]
// 		})
// 	)
// 	return modifiedData;
// }
//  const dataTransformed = data.map(entry => entry.fields).map(col=>checkForArraysAndReform((reformUserObject((col)))));
 
 // console.log(dataTransformed);
