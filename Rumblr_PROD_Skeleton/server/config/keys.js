// import keys_prod from './keys_prod.js'
// import keys_dev from './keys_dev.js'

// export default process.env.NODE_ENV === 'development' ? keys_dev : keys_prod;

export default {
  localIP: process.env.LOCAL_IP,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  bucket: process.env.BUCKET,
  mongoURL: process.env.MONGO_URL
}
