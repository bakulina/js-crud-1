// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Product {
  static #list = []
  constructor(name, price, description, id) {
    this.name = name
    this.price = price
    this.description = description
    this.id = id
  }
  static add = (Product) => {
    this.#list.push(Product)
  }
  static getList = () => {
    return this.#list
  }
}

//=================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  const list = Product.getList()

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',

    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description, id)

  Product.add(Product)
  console.log(Product.getList())
  res.render('product-create', {
    style: 'product-create',
  })
})

// ================================================================
router.get('/product-delete', function (req, res) {
  const { product } = req.query

  Product.deleteById(Number(id))

  res.render('allert', {
    style: 'allert',
    info: 'видалити',
  })
})
//================================================================
// Підключаємо роутер до бек-енду
module.exports = router
