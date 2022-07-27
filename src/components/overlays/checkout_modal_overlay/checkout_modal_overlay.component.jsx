import React from "react";

import "./checkout_modal_overlay.styles.scss";



export const ModalOverlay = () => (

		<div class="checkout-modal-overlay ">
			<div class="checkout-modal">
				<div class="checkout-modal-avatar">
					{/* <?xml version="1.0" encoding="utf-8"?>
					<svg viewBox="0 0 47.045746 50.5" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
						xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient gradientUnits="userSpaceOnUse" x1="-60.18479" y1="27.062622" x2="45.54239" y2="12.477451"
								id="gradient_1">
								<stop offset="0%" stop-color="#575757" />
								<stop offset="100%" stop-color="#BB9D88" />
							</linearGradient>
						</defs>
						<g id="logo-2" transform="matrix(-4.371139E-08 1 -1 -4.371139E-08 46.295746 0.7500019)">
							<path
								d="M9.80145 13.2925C9.80145 13.2925 38.3679 -6.30441 27.6304 13.2925C16.8928 32.8894 11.013 41.6143 21.9403 37.1366C32.8676 32.6589 34.0882 24.0772 38.7576 37.1366C43.427 50.1961 22.2326 6.56102 15.4307 9.6776"
								id="New-shape" fill="url(#gradient_1)" fill-rule="evenodd" stroke="#000000" stroke-width="1" />
							<path
								d="M8.53608 2.5445L39.2502 0.613099Q39.471 0.599216 39.6922 0.597556Q39.9134 0.595895 40.1343 0.606461Q40.3553 0.617028 40.5753 0.639788Q40.7953 0.662549 41.0137 0.697435Q41.2322 0.732321 41.4483 0.779225Q41.6645 0.82613 41.8778 0.884909Q42.091 0.943688 42.3007 1.01416Q42.5104 1.08464 42.7158 1.16659Q42.9213 1.24855 43.1219 1.34173Q43.3225 1.43492 43.5177 1.53904Q43.7128 1.64317 43.9019 1.75793Q44.091 1.87268 44.2735 1.99771Q44.456 2.12274 44.6313 2.25767Q44.8066 2.39259 44.9741 2.537Q45.1417 2.6814 45.301 2.83485Q45.4603 2.98829 45.6109 3.15031Q45.7615 3.31232 45.903 3.48241Q46.0444 3.65251 46.1762 3.83015Q46.308 4.0078 46.4298 4.19246Q46.5516 4.37712 46.6629 4.56822Q46.7743 4.75933 46.875 4.9563Q46.9757 5.15327 47.0653 5.35551Q47.1549 5.55774 47.2332 5.76462Q47.3115 5.97149 47.3783 6.18238Q47.445 6.39327 47.5 6.60753Q47.555 6.82178 47.5981 7.03875Q47.6412 7.25572 47.6722 7.47473Q47.7032 7.69375 47.7221 7.91414Q47.7409 8.13454 47.7476 8.35564Q47.7542 8.57674 47.7487 8.79787Q47.7431 9.019 47.7253 9.23949Q47.7075 9.45997 47.6776 9.67914L44.0738 36.0565Q44.028 36.3916 43.9541 36.7216Q43.8802 37.0516 43.7787 37.3741Q43.6772 37.6967 43.5489 38.0096Q43.4205 38.3225 43.2662 38.6234Q43.1119 38.9243 42.9328 39.2111Q42.7537 39.4979 42.5509 39.7686Q42.3482 40.0393 42.1234 40.2919Q41.8986 40.5445 41.6532 40.7772Q41.4078 41.01 41.1437 41.2211Q40.8796 41.4323 40.5986 41.6205Q40.3176 41.8086 40.0217 41.9724Q39.7258 42.1361 39.4172 42.2743Q39.1086 42.4125 38.7894 42.5242Q38.4701 42.6358 38.1427 42.7201Q37.8152 42.8044 37.4817 42.8608Q37.1483 42.9172 36.8113 42.9452L13.1465 44.9131Q12.9566 44.9289 12.7662 44.9357Q12.5758 44.9424 12.3853 44.94Q12.1948 44.9377 12.0046 44.9263Q11.8144 44.9149 11.625 44.8944Q11.4356 44.874 11.2474 44.8445Q11.0591 44.8151 10.8725 44.7767Q10.6859 44.7384 10.5013 44.6912Q10.3168 44.6439 10.1346 44.588Q9.95251 44.532 9.77327 44.4675Q9.59402 44.4029 9.41804 44.3299Q9.24207 44.2569 9.06977 44.1756Q8.89748 44.0943 8.72925 44.0049Q8.56102 43.9155 8.39723 43.8181Q8.23345 43.7208 8.07449 43.6158Q7.91552 43.5108 7.76174 43.3983Q7.60795 43.2858 7.4597 43.1662Q7.31145 43.0465 7.16905 42.9199Q7.02666 42.7934 6.89046 42.6601Q6.75426 42.5269 6.62455 42.3874Q6.49485 42.2478 6.37193 42.1023Q6.24902 41.9567 6.13317 41.8054Q6.01733 41.6542 5.90881 41.4976Q5.8003 41.341 5.69937 41.1794Q5.59843 41.0178 5.5053 40.8516Q5.41218 40.6854 5.32707 40.515Q5.24196 40.3445 5.16506 40.1702Q5.08817 39.9959 5.01965 39.8181Q4.95114 39.6403 4.89117 39.4595Q4.8312 39.2787 4.77991 39.0952Q4.72862 38.9117 4.68612 38.726Q4.64362 38.5403 4.61001 38.3527Q4.5764 38.1652 4.55176 37.9763L1.10629 11.5624Q1.07981 11.3594 1.06374 11.1553Q1.04768 10.9512 1.04208 10.7465Q1.03648 10.5418 1.04136 10.3372Q1.04624 10.1325 1.06158 9.92834Q1.07692 9.72418 1.10269 9.52108Q1.12845 9.31797 1.16457 9.11645Q1.20069 8.91493 1.24708 8.71552Q1.29346 8.51611 1.34998 8.31934Q1.40651 8.12256 1.47302 7.92894Q1.53954 7.73531 1.61587 7.54534Q1.69221 7.35537 1.77816 7.16956Q1.86411 6.98374 1.95945 6.80256Q2.0548 6.62139 2.15929 6.44533Q2.26377 6.26927 2.37713 6.09878Q2.49049 5.9283 2.61242 5.76383Q2.73435 5.59937 2.86454 5.44136Q2.99472 5.28335 3.13282 5.1322Q3.27091 4.98106 3.41656 4.83718Q3.56221 4.6933 3.71503 4.55705Q3.86785 4.42081 4.02743 4.29257Q4.18702 4.16432 4.35296 4.0444Q4.5189 3.92449 4.69075 3.81322Q4.86261 3.70195 5.03993 3.59962Q5.21726 3.49729 5.39958 3.40416Q5.58191 3.31103 5.76876 3.22736Q5.95561 3.14368 6.1465 3.06967Q6.33739 2.99566 6.53181 2.93151Q6.72623 2.86737 6.92368 2.81325Q7.12113 2.75913 7.32109 2.71518Q7.52105 2.67124 7.723 2.63758Q7.92495 2.60392 8.12835 2.58063Q8.33175 2.55735 8.53608 2.5445Z"
								id="Rectangle-2" fill="none" fill-rule="evenodd" stroke="#191919" stroke-width="1.5" />
						</g>
					</svg> */}
				</div>
				<div class="checkout-modal-body">
					<div class="checkout-modal-body-hero">
						<div class="checkout-modal-body-hero-cancel-btn"><span>&times;</span>
						</div>
						<p class="checkout-modal-body-hero-title">
							Splendid Depot Ltd.
						</p>
						<p class="checkout-modal-body-hero-subtitle">Your total is $280</p>
					</div>
					<div class="checkout-modal-body-content">
						<div class="top-modal-contents">
							<div class="primary-modal-content modal-content">
								{/* <?xml version="1.0" encoding="utf-8"?>
								<svg width="16px" height="12px" viewBox="0 0 16 12" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
									xmlns="http://www.w3.org/2000/svg">
									<defs>
										<rect width="16" height="12" id="artboard_1" />
										<clipPath id="clip_1">
											<use xlink:href="#artboard_1" clip-rule="evenodd" />
										</clipPath>
									</defs>
									<g id="envelope" clip-path="url(#clip_1)">
										<use xlink:href="#artboard_1" stroke="none" fill="#FFFFFF" fill-opacity="0" />
										<path
											d="M2 0L14 0C15.1046 0 16 0.89543 16 2L16 10C16 11.1046 15.1046 12 14 12L2 12C0.895431 12 0 11.1046 0 10L0 2C0 0.895431 0.895431 0 2 0ZM1 2L1 2.2169L8 6.4169L15 2.2169L15 2C15 1.44772 14.5523 1 14 1L2 1C1.44772 1 1 1.44772 1 2ZM10.2919 6.20794L15 9.10522L15 3.3831L10.2919 6.20794ZM9.32583 6.7876L8 7.58309L6.67417 6.7876L1.03376 10.2586C1.14774 10.6855 1.53715 11 2 11L14 11C14.4628 11 14.8523 10.6855 14.9662 10.2586L9.32583 6.7876ZM5.70808 6.20794L1 3.3831L1 9.10522L5.70808 6.20794Z"
											id="Rectangle-394-(Stroke)" fill="#000000" stroke="none" artboard="539204f1-a2d7-b5aa-53cd-976e862650c6" />
									</g>
								</svg> */}
								<input type="email" name=""  placeholder="Email"></input>
							</div>
							<div class="primary-modal-content modal-content">
								<input type="checkbox" name="" id=""></input>
	
								<input type="text" name=""  id="" placeholder="Email" value="Same billing and shipping info" disabled></input>
							</div>
						</div>
						<div class="bottom-modal-contents">
							<div class="modal-content">
									{/* <?xml version="1.0" encoding="utf-8"?>
									<svg viewBox="0 0 37 40" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
										xmlns="http://www.w3.org/2000/svg">
										<defs>
											<path d="M0 0L37 0L37 40L0 40L0 0Z" id="path_1" />
											<clipPath id="mask_1">
												<use xlink:href="#path_1" />
											</clipPath>
										</defs>
										<g id="Contacts-Icon">
											<path d="M0 0L37 0L37 40L0 40L0 0Z" id="Background" fill="#FFFFFF" fill-opacity="0" fill-rule="evenodd"
												stroke="none" />
											<g clip-path="url(#mask_1)">
												<path
													d="M18.3825 0.11375C13.9726 0.212891 11.182 1.99742 9.98125 4.755C8.8393 7.38039 9.07797 10.6887 9.89312 14.1256C9.45617 14.6397 9.09633 15.363 9.18813 16.4463L9.18813 16.505C9.34602 17.6506 9.69117 18.4584 10.1281 19.0313C10.3374 19.303 10.6348 19.3177 10.8919 19.4719C11.1195 20.7534 11.6299 21.9761 12.2137 22.9381C12.2431 23.0777 12.3019 23.2062 12.39 23.32C12.39 23.32 12.4855 23.4412 12.5075 23.4669C12.8012 23.9075 12.9481 24.5207 12.9481 25.2C12.9481 25.9234 12.9371 26.5953 12.86 27.3444C12.5773 28.0567 11.8723 28.6259 10.745 29.195C9.56633 29.7898 8.02414 30.337 6.45625 31.0163C4.88836 31.6955 3.29844 32.5107 2.02063 33.8069C0.742813 35.1031 -0.171484 36.8986 -0.3 39.2413L-0.35875 40.24L37.3587 40.24L37.3 39.2413C37.1715 36.8986 36.2792 35.1067 35.0087 33.8069C33.7383 32.507 32.141 31.6955 30.5731 31.0163C29.0052 30.337 27.452 29.7935 26.255 29.195C25.0947 28.6148 24.3677 28.0237 24.0519 27.2856C23.9784 26.397 23.9637 25.6957 23.9637 24.9062C23.9637 24.4032 24.1363 23.9479 24.4338 23.4963C24.4411 23.4852 24.4558 23.4779 24.4631 23.4669C24.4668 23.4595 24.5219 23.4081 24.5219 23.4081C24.6394 23.287 24.7202 23.1327 24.7569 22.9675C25.326 21.9908 25.7997 20.7497 26.02 19.5013C26.3137 19.347 26.6442 19.3287 26.8719 19.0313C27.3235 18.4401 27.5879 17.5992 27.6944 16.4463C27.7788 15.4512 27.4924 14.7278 27.0481 14.1844C27.5365 12.6789 28.1166 10.2702 27.9294 7.81C27.8266 6.45875 27.4704 5.11117 26.6663 3.99125C25.9392 2.97781 24.7642 2.28383 23.2881 1.96438C22.293 0.635157 20.4865 0.11375 18.4119 0.11375L18.3825 0.11375ZM18.4119 1.99375C18.4229 1.99375 18.4303 1.99375 18.4413 1.99375C20.3176 2.00109 21.5183 2.52984 21.9075 3.19812L22.1425 3.60938L22.6125 3.66813C23.905 3.84805 24.6137 4.34742 25.1388 5.07813C25.6639 5.80883 25.9649 6.82961 26.0494 7.95687C26.222 10.2151 25.5684 12.8625 25.1388 14.0669L24.845 14.86L25.5794 15.2419C25.5721 15.2676 25.8805 15.5797 25.8438 16.27C25.8438 16.2847 25.8438 16.2847 25.8438 16.2994C25.7556 17.1843 25.528 17.6837 25.3738 17.8856C25.2159 18.0913 25.1351 18.0619 25.1681 18.0619L24.3456 18.0619L24.2281 18.8844C24.0666 20.1034 23.446 21.6383 22.9063 22.4094L22.8769 22.4094C22.8218 22.4902 22.7814 22.5856 22.73 22.6738C22.484 22.9602 22.1132 23.3384 21.5844 23.79C20.7068 24.5391 19.5428 25.2 18.5 25.2C17.4646 25.2 16.2896 24.506 15.3863 23.7313C14.6042 23.0593 14.1378 22.4828 14.0057 22.3213C14.002 22.3139 14.0093 22.2992 14.0057 22.2919C13.4512 21.4914 12.816 20.0887 12.6544 18.8844L12.5663 18.0619L11.8025 18.0619C11.7695 18.0472 11.6814 17.9995 11.5969 17.8856C11.4317 17.669 11.1967 17.1623 11.0682 16.2994C11.0682 16.281 11.0682 16.2884 11.0682 16.27C11.0645 16.2553 11.0718 16.2553 11.0682 16.2406C11.0535 15.5283 11.4941 15.1317 11.4207 15.1831L11.9494 14.8012L11.8025 14.155C10.936 10.7291 10.8001 7.62641 11.7144 5.51875C12.6287 3.41844 14.4793 2.08922 18.4119 1.99375L18.4119 1.99375ZM14.8281 25.6994C15.8195 26.4301 17.0606 27.08 18.5 27.08C19.91 27.08 21.118 26.4631 22.0837 25.7581C22.0874 26.3309 22.1058 26.9184 22.1719 27.6381L22.1719 27.7556L22.2306 27.8731C22.3959 28.3064 22.6309 28.6736 22.9062 29.0188C22.8952 29.0555 22.8842 29.0959 22.8769 29.1363C22.8769 29.1363 22.6529 29.7531 21.9956 30.4288C21.3384 31.1044 20.3176 31.78 18.5 31.78C16.6898 31.78 15.6323 31.075 14.9456 30.37C14.259 29.665 14.035 29.0188 14.035 29.0188C14.3067 28.6663 14.5307 28.288 14.6812 27.8438L14.74 27.6675C14.8208 26.9552 14.8281 26.3126 14.8281 25.6994L14.8281 25.6994ZM24.375 30.3113C24.7055 30.5242 25.0469 30.7225 25.4031 30.8988C26.7764 31.5817 28.3333 32.1105 29.8094 32.7494C31.2855 33.3883 32.6624 34.1116 33.6575 35.1288C34.4506 35.9402 34.928 37.0198 35.185 38.36L1.815 38.36C2.07203 37.0198 2.5457 35.9402 3.3425 35.1288C4.34125 34.1116 5.74391 33.3883 7.22 32.7494C8.69609 32.1105 10.2383 31.5854 11.5969 30.8988C11.9347 30.7262 12.2798 30.5463 12.5956 30.3406C12.8049 30.7188 13.128 31.2109 13.5944 31.6919C14.5527 32.6796 16.1757 33.66 18.5 33.66C20.8169 33.66 22.4069 32.6906 23.3469 31.7213C23.8609 31.1925 24.173 30.7005 24.375 30.3113L24.375 30.3113Z"
													id="Shape" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
											</g>
										</g>
									</svg> */}
									<input type="text" name=""  placeholder="Name"></input>
							</div>
							<div class="modal-content">
									{/* <?xml version="1.0" encoding="utf-8"?>
									<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
										xmlns="http://www.w3.org/2000/svg">
										<defs>
											<rect width="16" height="16" id="artboard_1" />
											<clipPath id="clip_1">
												<use xlink:href="#artboard_1" clip-rule="evenodd" />
											</clipPath>
										</defs>
										<g id="geo-alt" clip-path="url(#clip_1)">
											<use xlink:href="#artboard_1" stroke="none" fill="#FFFFFF" fill-opacity="0" />
											<path
												d="M10.2058 12.01C9.48132 12.957 8.75442 13.7768 8.20768 14.3605C8.13503 14.438 8.06566 14.5113 8 14.5801C7.93434 14.5113 7.86497 14.438 7.79232 14.3605C7.24558 13.7768 6.51868 12.957 5.79425 12.01C5.06754 11.0601 4.35825 10.0015 3.83423 8.93977C3.3048 7.86708 3 6.86191 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6C13 6.86191 12.6952 7.86708 12.1658 8.93977C11.6418 10.0015 10.9325 11.0601 10.2058 12.01ZM14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 10.3137 8 16 8 16C8 16 14 10.3137 14 6ZM6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6ZM11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9C9.65685 9 11 7.65685 11 6Z"
												id="Vector" fill="#000000" stroke="none" artboard="2e36e4fe-1270-a9c9-755e-4e8a1271644f" />
										</g>
									</svg> */}
									<input type="text" name=""  placeholder="Street"></input>
							</div>
							<div class="modal-content">
									<input type="text" class="MC-input" name=""  placeholder="Postcode"></input>
									<input type="text" class="MC-input" name=""  placeholder="City"></input>
							</div>
							<div class="modal-content">
									{/* <?xml version="1.0" encoding="utf-8"?>
									<svg class="modal-content-icon" width="16px" height="12px" viewBox="0 0 16 12" version="1.1"
										xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M-551.2 -319L-539.2 -319C-538.095 -319 -537.2 -318.105 -537.2 -317L-537.2 -309C-537.2 -307.895 -538.095 -307 -539.2 -307L-551.2 -307C-552.305 -307 -553.2 -307.895 -553.2 -309L-553.2 -317C-553.2 -318.105 -552.305 -319 -551.2 -319ZM-552.2 -317L-552.2 -316.783L-545.2 -312.583L-538.2 -316.783L-538.2 -317C-538.2 -317.552 -538.648 -318 -539.2 -318L-551.2 -318C-551.752 -318 -552.2 -317.552 -552.2 -317ZM-542.908 -312.792L-538.2 -309.895L-538.2 -315.617L-542.908 -312.792ZM-543.874 -312.212L-545.2 -311.417L-546.526 -312.212L-552.166 -308.741C-552.052 -308.314 -551.663 -308 -551.2 -308L-539.2 -308C-538.737 -308 -538.348 -308.314 -538.234 -308.741L-543.874 -312.212ZM-547.492 -312.792L-552.2 -315.617L-552.2 -309.895L-547.492 -312.792Z"
											id="Rectangle-394-(Stroke)" fill="#706560" fill-rule="evenodd" stroke="none" />
									</svg> */}
									<input type="text" name="" id="" list="checkout-country-picker" placeholder="Country"></input>
									<datalist id="checkout-country-picker">
										<option value="Egypt"></option>
										<option value="Israel"></option>
									</datalist>
							</div>
						</div>
	
					</div>
					<button class="checkout-modal-body-cta">Payment Info 
						{/* <?xml version="1.0" encoding="utf-8"?>
						<?xml version="1.0" encoding="utf-8"?>
						<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg">
							<defs>
								<rect width="16" height="16" id="artboard_1" />
								<clipPath id="clip_1">
									<use xlink:href="#artboard_1" clip-rule="evenodd" />
								</clipPath>
							</defs>
							<g id="arrow-right-short" clip-path="url(#clip_1)">
								<g id="arrow-sm" transform="translate(4 4.5)" artboard="e1864fc1-400a-9b06-ebaa-0f1e607185fe">
									<path d="M4.76837e-07 7L7.82817e-07 -4.76837e-07L8 0L8 7L4.76837e-07 7Z" id="arrow-sm-(Background)" fill="none"
										fill-rule="evenodd" stroke="none" />
									<path
										d="M0.500001 3L6.29289 3L4.14645 0.853553C3.95118 0.658291 3.95118 0.341708 4.14645 0.146446C4.34171 -0.0488162 4.65829 -0.0488162 4.85355 0.146446L7.85355 3.14645C8.04882 3.34171 8.04882 3.65829 7.85355 3.85355L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L6.29289 4L0.500001 4C0.223858 4 6.17756e-07 3.77614 6.29827e-07 3.5C6.41898e-07 3.22386 0.223858 3 0.500001 3Z"
										id="arrow" fill="var(--lightBGColor)" fill-rule="evenodd" stroke="none" />
								</g>
							</g>
						</svg> */}
					</button>
				</div>
			</div>
		</div>

)