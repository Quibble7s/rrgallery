# rrgallery

I made this personal project as a way to improve my skills consuming APIs, using ReactJs and Redux. I learned how the right or wrong use of hooks improves or makes worse the overall performance.

## How to run this project locally

- Clone or download this repository.
- Open a terminal and go to the directory.
- Run the command `npm install` to install all the dependencies.
- Go to the [firebase console](https://console.firebase.google.com/u/0/) and then create a new app. After that head to project configuration and get your `firebaseConfig`.
- Go to [Unsplash](https://unsplash.com/developers) and create a new app. After that go to your app inside unsplash and get your access key.
- Create a `.env` file in the root folder of the project and fill it with the information:

```
#Firebase
REACT_APP_FIREBASE_KEY=YOUR_FIREBASE_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORE_BUCKET=YOUR_FIREBASE_STORE_BUCKET
REACT_APP_FIREBASE_SENDER_ID=YOUR_FIREBASE_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
#Unsplash
REACT_APP_UNSPLASH_KEY=YOUR_UNSPLASH_KEY
```

- Run the command `npm start` to run a dev test server.
- Visit this [url](http://localhost:3000/).
- You can run `npm run build` to get a production build of this project and visualize it or you can go to this [website](https://www.rrgallery.cf/) to see the final result.
