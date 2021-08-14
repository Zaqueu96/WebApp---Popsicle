import styled from "styled-components";
import Lottie from "react-lottie";
import { Button } from "@material-ui/core";

export const HeaderContent = styled.div``;
export const BodyContent = styled.div`
  .MuiCardHeader-subheader{
    cursor: pointer;
  }
  `;
export const FooterContent = styled.div``;

export const LottieCustom = styled(Lottie)`
  svg {
    width: 30%;
  }
`;

export const LottieContainer = styled.div`
  max-width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const ImageCmp = styled.img `
max-width: 100%;
`

export const ButtonCustom = styled(Button)`
width:100%;
`

export const ContentHeaderText = styled.div`
  border-bottom: 1px solid #8CBCD6;
  border-top: 1px solid #8CBCD6;
  padding: 5px 0px;

`;