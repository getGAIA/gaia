import { express } from 'express';

const app = express();

import routes from './routes/index.js';
import morgan from 'morgan';
import { logger } from './utils/winston.js';
import { initPrisma } from './db/index.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

initPrisma(5, 1000)
  .then(() => {
    // app.use(errMiddleware);

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    app.use('/api', routes);

    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    logger.error('Failed to connect to the database:', error);
    process.exit(1);
  });
