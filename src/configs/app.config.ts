import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  globalPrefix: process.env.API_PREFIX,
  applicationPort: process.env.PORT,
}));
