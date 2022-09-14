import isEqual from "lodash.isequal";
import React, {useContext} from "react";
import "../../../sass_modules/_variables.scss";
import {cartModalContext} from "../../../components/wrapper/wrapper.component";
import {__toggleCartModal} from "../../../reducers/cart_modal.reducer";



const CartIcon = React.memo(() => {
	const {cartModalState,cartModalStateDispatch} = useContext(cartModalContext);
	return (
		<svg
			onClick={() => {
				cartModalStateDispatch(__toggleCartModal());
			}}
			width="43px"
			height="42.999996px"
			viewBox="0 0 43 42.999996"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<path d="M0 0L43 0L43 43L0 43L0 0Z" id="path_1" />
				{/* <clipPath id="mask_1"><use xlinkHref="#path_1" /></use></clipPath> */}
				<g clipPath="url(#path_1)">
					<use xlinkHref="#path_1"></use>
				</g>
			</defs>
			<g id="cart_icon">
				<g id="svg">
					<path d="M0 0L43 0L43 43L0 43L0 0Z" id="Background" fill="#FFFFFF" fillOpacity="0" fillRule="evenodd" stroke="none" />
					<g clipPath="url(#mask_1)">
						<path
							d="M1.43333 0L5.73333 0C6.39103 0 6.96437 0.447627 7.12387 1.0857L8.28578 5.73333L41.5667 5.73333C41.9961 5.73333 42.4029 5.92586 42.6752 6.25796C42.9472 6.59004 43.0565 7.02669 42.9722 7.44777L40.1055 21.7811C39.9768 22.4247 39.4273 22.8986 38.7717 22.9315L11.8342 24.2826L12.6562 28.6667L37.2667 28.6667C38.0581 28.6667 38.7 29.3085 38.7 30.1C38.7 30.8915 38.0581 31.5333 37.2667 31.5333L34.4 31.5333L14.3333 31.5333L11.4667 31.5333C10.7769 31.5333 10.185 31.042 10.0579 30.364L5.76575 7.47283L4.61421 2.86667L1.43333 2.86667C0.641726 2.86667 0 2.22494 0 1.43333C0 0.641726 0.641726 0 1.43333 0L1.43333 0ZM11.301 21.4391L37.5134 20.1244L39.8182 8.6L8.89368 8.6L11.301 21.4391L11.301 21.4391ZM8.59998 37.2667C8.59998 40.4332 11.1669 43 14.3333 43C17.4997 43 20.0666 40.4332 20.0666 37.2667C20.0666 34.1002 17.4997 31.5333 14.3333 31.5333C11.1669 31.5333 8.59998 34.1002 8.59998 37.2667L8.59998 37.2667ZM28.6667 37.2667C28.6667 40.4332 31.2336 43 34.4001 43C37.5666 43 40.1334 40.4332 40.1334 37.2667C40.1334 34.1002 37.5666 31.5333 34.4001 31.5333C31.2336 31.5333 28.6667 34.1002 28.6667 37.2667L28.6667 37.2667ZM17.2 37.2667C17.2 38.8499 15.9165 40.1333 14.3333 40.1333C12.7501 40.1333 11.4667 38.8499 11.4667 37.2667C11.4667 35.6834 12.7501 34.4 14.3333 34.4C15.9165 34.4 17.2 35.6834 17.2 37.2667L17.2 37.2667ZM37.2667 37.2667C37.2667 38.8499 35.9833 40.1333 34.4 40.1333C32.8167 40.1333 31.5333 38.8499 31.5333 37.2667C31.5333 35.6834 32.8167 34.4 34.4 34.4C35.9833 34.4 37.2667 35.6834 37.2667 37.2667L37.2667 37.2667Z"
							id="Vector-(Stroke)"
							fill="#393939"
							fillRule="evenodd"
							stroke="none"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}, (prev,next) => {
	if (isEqual(prev, next)) return true;
	return false;
});



export default CartIcon;
