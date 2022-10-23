module.exports= (sequelize, DataTypes)=>{
    const UserData= sequelize.define('UserData',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            primaryKey:true           
        },
        mobileNo:{
            type:DataTypes.STRING,
            unique:true
        }
    },
    {
        tableName: 'UserData',
    }
    );
            return UserData;
}
