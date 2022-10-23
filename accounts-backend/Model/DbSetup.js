const { Sequelize, DataTypes } = require("sequelize")
const sequelize= new Sequelize('postgres', 'postgres', 'postgres',{
    host:'localhost',
    dialect:'postgres',
    pool:{max:5,min:0,idle:10000}
} )

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db={};
db.sequelize=sequelize;

db.UserData=require('./userData')(sequelize,DataTypes);
db.sequelize.sync({alter:true}).then(()=>{
    console.log('res-sync-yes')
})


module.exports=db;