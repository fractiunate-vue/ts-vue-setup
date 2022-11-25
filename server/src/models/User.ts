import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';

interface UserAttributes {
    readonly email: string;
    readonly password: string;
}
interface UserInstance extends Model<UserAttributes>, UserAttributes { }

// TOOD: export and use type and Model in index.ts --> ...modelMap[key]
type UserModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): UserInstance;
};


// Rework: I feel like this is a method call with parameter, 
// Should be: ??? exported Schema/ Type?
module.exports = (sequelize: Sequelize) =>

    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE
    });

