import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/winston.js';

export const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

export async function initPrisma(maxAttempts, interval) {
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      await prisma.$connect();

      logger.info('Connected to the database.');
      return;
    } catch (error) {
      logger.error(`Error connecting to the database: ${error}`);
      logger.error(
        `Attempt ${attempt} of ${maxAttempts} to connect to the database..`
      );

      attempt++;
      if (attempt < maxAttempts) {
        logger.info(
          `Sleeping ${interval / 1000} seconds before attempting again..`
        );

        await new Promise((resole) => setTimeout(resole, interval));
      }
    }
  }
  throw new Error(
    `Failed to connect to the database after ${maxAttempts} attempts.`
  );
}

prisma.$on('error', (e) => {
  logger.error(e);
});

