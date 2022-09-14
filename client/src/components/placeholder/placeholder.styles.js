import styled,{css} from "styled-components";


const _useAccent = css`
    fill: ${({theme})=>{
        return theme.$accentColor;
    }};
`;

export const PlaceholderVectorStyled = styled.svg`
  height: ${({$variant})=>{
      switch($variant){
          case `S`:
              return `35%`;
          case `M`:
              return `50%`;
          case `L`:
              return `65%`;
          case `XL`:
              return `80%`;
      }
  }};
    min-height: ${({$variant})=>{
      switch($variant){
          case `S`:
              return `35rem`;
          case `M`:
              return `50rem`;
          case `L`:
              return `65rem`;
          case `XL`:
              return `80rem`;
      }
  }};
`;

export const PHSShapeFilled = styled.path`
    ${_useAccent};
`;

export const PHSUseFilled = styled.g`
  use:first-of-type {
      fill: ${({theme})=>{
          return theme.$lightBGColor;
      }};
  }
`;
export const PHSUseStrokeAccent = styled.g`
    use{
        stroke: ${({theme})=>{
            return theme.$accentColor;
        }};
    }
`;

export const PHSCircleStyled = styled.path`
    ${_useAccent};
`;
export const PHSInnerCircleStyled = styled.path`
    fill: ${({theme})=>{
        return theme.$lightBGColor;
    }};
`;