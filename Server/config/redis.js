import env from 'dotenv'
env.config()
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_USER_NAME,
  port: 6379,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null, 
  retryStrategy(times) {
    return Math.min(times * 50, 2000); 
  },
});

export default redis;
