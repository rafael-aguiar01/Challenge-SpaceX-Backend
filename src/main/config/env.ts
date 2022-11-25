export default {
  rocketsLink: 'https://api.spacexdata.com/v4/rockets',
  launchesLink: 'https://api.spacexdata.com/v5/launches',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/bettingfifaworldcup',
  port: process.env.PORT || 5050
}
