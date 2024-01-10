const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  database: "Spring",
  username: "postgres",
  password: "12345",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const UserModel = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    surname: {
      type: DataTypes.STRING(50),
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

const ProjectModel = sequelize.define(
  "Project",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

sequelize
  .sync()
  .then(() => {
    console.log("Модели успешно синхронизированы с базой данных");
  })
  .catch((error) => {
    console.error("Ошибка при синхронизации моделей с базой данных", error);
  });

module.exports = { UserModel, ProjectModel };
