var redisClientConfig = undefined;
if (process.env.NODE_ENV === 'production') {
  redisClientConfig = process.env.REDIS_URL;
}

module.exports = redisClientConfig;
