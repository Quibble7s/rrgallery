# rrgallery

I made this personal project as a way to improve my skills consuming APIs, using ReactJs and Redux. I learned how the right or wrong use of hooks improves or makes worse the overall performance.

## Installing and running this project

- Clone or download this repository.
- Open a terminal and go to the directory.
- Run the command `npm install` to install all the dependencies.
- Go to the [firebase console](https://console.firebase.google.com/u/0/) and then create a new app. After that head to project configuration and get your `firebaseConfig`.
- Paste your `firebaseConfig` at src/helpers/firebase-config.js.
- Run the command `npm install firebase`
- Go to [Unsplash](https://unsplash.com/developers) and create a new app. After that go to your app inside unsplash and get your access key.
- Paste your unsplash access key at src/helpers/Unsplash/getimages.js. `const k = 'client_id=PASTE_YOUR_KEY_HERE';`.
- Run the command `npm start` to run a dev test server.
- You can run `npm run build` to get a production build of this project and visualize it or you can go to this [website](https://www.rrgallery.cf/) to see the final result.
