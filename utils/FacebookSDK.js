// /// Facebook SDK
// export const initFacebookSdk = () => {
//   return new Promise((resolve, reject) => {
//     window.fbAsyncInit = () => {
//       window.FB.init({
//         appId: "791770779680859",
//         cookie: true,
//         xfbml: true,
//         version: "v19.0",
//       });
//       resolve();
//     };
//   });
// };

// export const getFacebookLoginStatus = () => {
//   return new Promise((resolve, reject) => {
//     window.FB.getLoginStatus((response) => {
//       resolve(response);
//     });
//   });
// };

// export const fbLogin = () => {
//   return new Promise((resolve, reject) => {
//     window.FB.login((response) => {
//       resolve(response);
//     });
//   });
// };
