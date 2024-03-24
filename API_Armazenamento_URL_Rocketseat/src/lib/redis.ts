import { createClient } from "redis";

const PASSWORD_REDIS = "docker";
const URL_PORT_REDIS = "localhost:6379";

export const redis = createClient({
  url: `redis://:${PASSWORD_REDIS}@${URL_PORT_REDIS}`,
});

redis.connect();
