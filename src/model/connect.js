import {Sequelize} from "sequelize"
// import config from "../config/config.js";


// const sequelize = new Sequelize(config.dataBase,config.userName,config.pass,{
//     port : config.port,
//     host : config.host,
//     dialect : config.dialect
// })

const sequelize = new Sequelize("app_food","root","1234",{
    port : 3307,
    host : "localhost",
    dialect : "mysql"
})

try {
    await sequelize.authenticate()
    console.log("connect thành công");
} catch {
    console.log("connect thất bại");
}
export default sequelize
// yarn sequelize-auto -h localhost -d app_food -u root -x 1234 -p 3307 --dialect mysql -o ./src/model -l esm