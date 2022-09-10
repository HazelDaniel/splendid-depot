import { css } from "styled-components";

export const makeFlex = css`
	display: flex;
	align-items: center;
`;
export const makeFlexCenter = css`
	${makeFlex};
	justify-content: center;
`;
export const makeFlexEnd = css`
	${makeFlex};
	justify-content: flex-end;
`;

export const makeRowFlex = css`
	${makeFlex};
	flex-direction: row;
`;
export const makeRowFlexStart = css`
	${makeRowFlex};
	justify-content: flex-start;
`;
export const makeRowFlexCenter = css`
	${makeRowFlex};
	justify-content: center;
`;
export const makeRowFlexEnd = css`
	${makeRowFlex};
	justify-content: flex-end;
`;
export const makeColFlex = css`
	${makeFlex};
	flex-direction: column;
`;
export const makeColFlexStart = css`
	${makeColFlex};
	justify-content: flex-start;
`;
export const makeColFlexCenter = css`
	${makeColFlex};
	justify-content: center;
`;
export const makeColFlexEnd = css`
	${makeColFlex};
	justify-content: flex-end;
`;

export const makeFullWidthBlock = css`
	display: block;
	width: 100%;
`;
export const makeFullHeightBlock = css`
	display: block;
	height: 100%;
`;
export const makeFullSizeBlock = css`
	${makeFullWidthBlock};
	${makeFullHeightBlock};
`;
export const makeAbsoluteDiv = css`
	position: absolute;
	content: "";
`;
export const makeAbsoluteTopDiv = css`
	${makeAbsoluteDiv};
	top: 0;
`;
export const makeAbsoluteTopRightDiv = css`
	${makeAbsoluteTopDiv};
	right: 0;
`;
export const makeAbsoluteTopLeftDiv = css`
	${makeAbsoluteTopDiv};
	left: 0;
`;
export const makeAbsoluteBottomDiv = css`
	${makeAbsoluteDiv};
	bottom: 0;
`;
export const makeAbsoluteBottomRightDiv = css`
	${makeAbsoluteBottomDiv};
	right: 0;
`;
export const makeAbsoluteBottomLeftDiv = css`
	${makeAbsoluteBottomDiv};
	left: 0;
`;
