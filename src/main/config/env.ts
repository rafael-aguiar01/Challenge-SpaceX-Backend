export default {
  rocketsLink: 'https://api.spacexdata.com/v4/rockets',
  launchesLink: 'https://api.spacexdata.com/v5/launches',
  mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/spacexapi',
  port: process.env.PORT || 5050
}
