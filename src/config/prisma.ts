import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.js';
import { config } from './serverConfig.js';

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ config.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export { prisma }