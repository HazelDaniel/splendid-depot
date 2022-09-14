import {
	FooterBottomDivStyled,
	FooterBrandNameStyled,
	FooterCopyrightStyled, FooterDisplayDivStyled, FooterDisplayTextStyled, FooterDisplayTitleStyled,
	FooterLogoDivStyled,
	FooterStyled, FooterTabListsStyled, FooterTabsDivStyled, FooterTabStyled
} from "./footer.styles";
import {Logo} from "../logo/logo.component";
import "../../sass_modules/_typography.scss";
import {forwardRef, useContext} from "react";
import {FooterContext} from "../../App";
import {__showAbout, __showAddress, __showContact} from "../../reducers/footer.reducer";

export const Footer = forwardRef((_,ref)=>{
	const {footerState,footerStateDispatch} = useContext(FooterContext);
	return <FooterStyled ref={ref}>
		<FooterLogoDivStyled>
			<Logo/>
		</FooterLogoDivStyled>
		<FooterBrandNameStyled>Splendid Depot</FooterBrandNameStyled>
		<FooterBottomDivStyled>
			<FooterTabsDivStyled>
				<FooterTabListsStyled>
					<FooterTabStyled $isActive={footerState.showAbout} onClick={()=>footerStateDispatch(__showAbout())}> About us </FooterTabStyled>
					<FooterTabStyled $isActive={footerState.showContact} onClick={()=>footerStateDispatch(__showContact())}> Contact </FooterTabStyled>
					<FooterTabStyled $isActive={footerState.showAddress} onClick={()=>footerStateDispatch(__showAddress())}> Address </FooterTabStyled>
				</FooterTabListsStyled>
			</FooterTabsDivStyled>
			<DynamicFooterDisplay title={footerState.showAbout?dynamicFooterDisplayData.aboutUs.title: footerState.showContact? dynamicFooterDisplayData.contact.title:dynamicFooterDisplayData.address.title } paragraph={footerState.showAbout?dynamicFooterDisplayData.aboutUs.paragraph: footerState.showContact? dynamicFooterDisplayData.contact.paragraph:dynamicFooterDisplayData.address.paragraph }/>
		</FooterBottomDivStyled>
		<FooterCopyrightStyled> All rights reserved . &copy; <span> {new Date().getFullYear()} </span> </FooterCopyrightStyled>
	</FooterStyled>
	
})
export default Footer;

export const DynamicFooterDisplay = ({title,paragraph})=>{
	return (
		<FooterDisplayDivStyled>
			<FooterDisplayTitleStyled>{title}</FooterDisplayTitleStyled>
			<FooterDisplayTextStyled> {paragraph}</FooterDisplayTextStyled>
		</FooterDisplayDivStyled>
	)
};
const dynamicFooterDisplayData = {
	aboutUs: {
		title: `ABOUT US`,
		paragraph: `we are a bunch of talented devs that hold the world by the balls . we are unstoppable and we have no where to go but up`,
	},
	contact: {
		title: `REACH US`,
		paragraph: ` email: hazeldaniel856@gmail.com \n\t phone: +234____688996 \n`,
	},
	address: {
		title: `ADDRESS`,
		paragraph: `No.5 66th ave . Albert McCauley road. Lagos Nigeria`
	}
}
