"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

console.log("EENV************: ", env);

//TODO: to delete
const { exec } = require("child_process");
exec(`ls -a ${path.join(__dirname, "/../")}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
exec(
  `ls ${path.join(__dirname, "/../config.js")}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

const customConfig = require(path.join(__dirname, "/../config"))[env];
console.log("customConfig: ", customConfig);

const db: { sequelize: any; Sequelize: any } = {
  sequelize: undefined,
  Sequelize: undefined,
};

let sequelize;

if (customConfig.use_env_variable) {
  sequelize = new Sequelize(
    process.env[customConfig.use_env_variable],
    customConfig
  );
} else {
  sequelize = new Sequelize(
    customConfig.database,
    customConfig.username,
    customConfig.password,
    customConfig
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName]?.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
  db: db,
  User: require("./user")(sequelize, Sequelize.DataTypes),
};
