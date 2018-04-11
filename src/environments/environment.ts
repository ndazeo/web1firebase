// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAlwyF9dM6ocjNFQ9R-LAJnqoCw3cEbbVk",
    authDomain: "web1firebase.firebaseapp.com",
    databaseURL: "https://web1firebase.firebaseio.com",
    projectId: "web1firebase",
    storageBucket: "web1firebase.appspot.com",
    messagingSenderId: "541857586912"
  }
};