module.exports = (sequelize: any, DataTypes: any) => {
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE
    });
}
