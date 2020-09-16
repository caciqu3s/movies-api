module.exports = {
    dbConfig: {
        dialect: 'mssql',
        host: 'localhost',
        username: 'sa',
        password: 'docker',
        database: 'movies',
        define: {
            timestamps: true,
            underscored: true
        }
    }
}