/* eslint-disable import/no-anonymous-default-export */
export default {
  // Temp fonts
  fonts: {
		//font-family
    title: "century gothic, sans-serif",
    main: "century gothic, sans-serif",
		textFamily: "Open Sans, sans-serif",
    primary_size: "24px",
    secondary_size: "20px",
		textSizeLg: "17px",
		//font-weight
		fontWeight: {
			thin: 100,
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
			extraBold: 900,
		}
  },
  // Colors for layout
  colors: {
    primary1: "#f18c27",
    secondary_color: "#fff",
    background1: "#08013c",
    text_color: "#cecece",
  },
  // Breakpoints for responsive design
  breakpoints: {
    //default screen-size
    xs: 'screen and (max-width: 450px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 770px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
    //setting breakpoints
    xxl: 'screen and (max-width: 1507px)',
    mxl: 'screen and (max-width: 1350px)',
    mlg: 'screen and (max-width: 1170px)',
    msm: 'screen and (max-width: 1000px)'
  },
}
