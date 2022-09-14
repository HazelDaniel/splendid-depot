import {
	FooterBottomDivStyled,
	footerBrandDivStyled, FooterBrandNameStyled,
	FooterCopyrightStyled, FooterDisplayDivStyled, FooterDisplayTextStyled, FooterDisplayTitleStyled,
	FooterLogoDivStyled,
	FooterStyled, FooterTabListsStyled, FooterTabsDivStyled, FooterTabStyled
} from "./footer.styles";
import {Logo} from "../logo/logo.component";
import "../../sass_modules/_typography.scss";

export const Footer = ()=>{
	return <FooterStyled>
		<FooterLogoDivStyled>
			<Logo/>
		</FooterLogoDivStyled>
			<FooterBrandNameStyled>Splendid Depot</FooterBrandNameStyled>
		<FooterBottomDivStyled>
		<FooterTabsDivStyled>
			<FooterTabListsStyled>
			<FooterTabStyled $isActive={true}> About us </FooterTabStyled>
			<FooterTabStyled> Contact </FooterTabStyled>
			<FooterTabStyled> Address </FooterTabStyled>
			</FooterTabListsStyled>
		</FooterTabsDivStyled>
		<FooterDisplayDivStyled>
			<FooterDisplayTitleStyled>ABOUT US</FooterDisplayTitleStyled>
			<FooterDisplayTextStyled> we are a bunch of talented devs that hold the world by the balls . we are unstoppable and we have no where to go but up</FooterDisplayTextStyled>
		</FooterDisplayDivStyled>
		</FooterBottomDivStyled>
		<FooterCopyrightStyled> All rights reserved . &copy; <span> {new Date().getFullYear()} </span> </FooterCopyrightStyled>
	</FooterStyled>
	
}
export default Footer;
