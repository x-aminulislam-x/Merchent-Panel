interface IENV {
  ApiEndpoint: string;
  LandingPageURL: string;
}

export const ENV: IENV = {
  ApiEndpoint: process.env.REACT_APP_BASE_URL,
  LandingPageURL: process.env.REACT_APP_LANDING_PAGE,
};
