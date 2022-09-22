// Contains Global Configurations
const config = {
    firebase: {
        apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    },
    github: {
      accessToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
      userAgent: process.env.REACT_APP_GITHUB_USER_AGENT
    },
    preview: {
      url: 'https://ensemble-live-web.web.app/web/index.html'
    }
  }
  
  export default config;
  