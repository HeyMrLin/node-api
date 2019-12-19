const db = require('../lib/mysql');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const User = Sequelize.import('../schema/users');
// User.sync({ force: false }); //自动创建表

class UserModel {
  /**
   * 创建文章模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createUser(data) {
    return await User.create({
      username: data.username, //标题
      password: data.password,  //作者
      age: data.age,  //文章内容
      sex: data.sex //文章分类
    });
  }

  /**
   * 查询文章的详情
   * @param id 文章ID
   * @returns {Promise<Model>}
   */
  static async getUserDetail(id) {
    return await User.findOne({
      where: {
        id
      }
    });
  }
}

module.exports = UserModel;