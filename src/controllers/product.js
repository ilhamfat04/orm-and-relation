// import models here
const { product, user } = require('../../models')

exports.getProducts = async (req, res) => {
  // code here
  try {
    const data = await product.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      },
      attributes: {
        exclude: ['idUser', 'createdAt', 'updatedAt']
      }
    })

    res.send({
      status: "Success",
      data
    })
  } catch (error) {
    res.send({
      status: "failed",
      message: 'server error'
    })
  }
};

exports.addProduct = async (req, res) => {
  // code here
  try {
    const data = req.body

    await product.create(data)

    res.send({
      status: "Success",
      data
    })

  } catch (error) {
    res.send({
      status: "failed",
      message: 'server error'
    })
  }
};
