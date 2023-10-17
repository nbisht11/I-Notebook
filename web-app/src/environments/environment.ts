// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  AUTH_HOST : "http://localhost:5000/api/auth/",
  LOGIN_ENDPOINT: "login",
  SIGN_UP_ENDPOINT: "createUser",
  GET_USER_ENDPOINT: "getuser",

  NOTE_HOST: "http://localhost:5000/api/notes/",
  CREATE_NOTE_ENDPOINT: "createnote",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
