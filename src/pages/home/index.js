import React from "react";
import {
  Container,
  Typography,
  Grid
} from "@material-ui/core";
const animationData = require("../../animation/animation_002.json");
//import animationData2 from "./../../../public/animation/animate_001.json";
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  LottieCustom,
  LottieContainer,
  HeaderContent,
  BodyContent,
  FooterContent,
  ContentHeaderText
} from "./styles";
import { ThemeProvider } from "styled-components";
import ItemSale from '../../components/ItemSale';
export default function Index() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
 
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HeaderContent>
          <LottieContainer>
            <LottieCustom options={{ animationData }} speed="1" />
          </LottieContainer>
          <ContentHeaderText>
          <Typography align="center" variant="h4">
            Sorvetes e Picolés
          </Typography>
          </ContentHeaderText>
        </HeaderContent>
        <BodyContent
          style={{ margin: '10px 0' }}
        >
          <Grid container spacing={2} >
            {['a', ...Array(10)].fill().map((v, k) => {
              return (
                <Grid item xs={4} alignContent="center" >
                  <ItemSale item={null}/>
                </Grid>
              )
            })}
          </Grid>
        </BodyContent>
        <FooterContent></FooterContent>
      </Container>
    </ThemeProvider>
  );
}
