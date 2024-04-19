export const initFacebookSdk = () => {
  window.FB.init({
    appId: "829530768872787",
    cookie: true,
    xfbml: true,
    version: "v19.0",
  });
};

export const getFacebookLoginStatus = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login((response) => {
      resolve(response);
    });
  });
};
