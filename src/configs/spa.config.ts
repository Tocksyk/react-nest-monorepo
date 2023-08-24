import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('spa1', () => ({
  rootPath: join(__dirname, '..', process.env.SPA_1_PATH),
  exclude: [process.env.EXCLUDE_PREFIX],
}));
