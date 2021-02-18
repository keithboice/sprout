import useJwt from "@/auth/jwt/useJwt";


/**
 * Return if contacts is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
  // eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
    return localStorage.getItem( "userData" ) && localStorage.getItem( useJwt.jwtConfig.storageTokenKeyName );
  };

export const getUserData = () => JSON.parse( localStorage.getItem( "userData" ) );

/**
 * This function is used for demo purpose route navigation
 * In real styles you won't need this function because your styles will navigate to same route for each users
 * regardless of ability Please note role field is just for showing purpose it's not used by anything in frontend We
 * are checking role just for ease NOTE: If you have different pages to navigate based on contacts ability then this
 * function can be useful. However, you need to update it.
 * @param {String} userRole Role of contacts
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if ( userRole === "admin" ) return "/";
  if ( userRole === "client" ) return { name: "access-control" };
  return { name: "auth-login" };
};
