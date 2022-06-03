import styled from "styled-components";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const StatStyled = styled.div`
  padding: 0px 25px 0px 10px;
  border-left: 2px solid black;

  & .Stat__data {
    display: flex;
  }

  & .Stat__value {
    font-weight: bold;
  }

  & .Stat__suffix {
    font-weight: bold;
    padding: 2px;
  }

  & .Stat__caption {
    opacity: 0.6;
  }

  @media ${device.mobileS} { 
    & .Stat__value {
      font-size: 0.9em;
    }

    & .Stat__suffix {
      font-size: 0.5em;
    }

    & .Stat__caption {
      font-size: 0.5em;
    }
  }

  @media ${device.tablet} { 
    & .Stat__value {
      font-size: 1.2em;
    }

    & .Stat__suffix {
      font-size: 0.7em;
    }

    & .Stat__caption {
      font-size: 0.7em;
    }
  }

`;

export default StatStyled;
