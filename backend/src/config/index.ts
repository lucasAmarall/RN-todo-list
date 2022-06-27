export default () => ({
    dbHost: process.env.TYPEORM_HOST,
    dbPort: parseInt(process.env.TYPEORM_PORT, 10),
    dbUser: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
});