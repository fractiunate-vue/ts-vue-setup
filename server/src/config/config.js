module.exports = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_NAME || "admin",
        password: process.env.DB_PASSWORD || "admin",
        port: process.env.DB_PORT || 5032,
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            Storage: './tabtracker.sqlite'
        }
    }
};
