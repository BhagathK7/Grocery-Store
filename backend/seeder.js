const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'Apple',
    price: 3.5,
    image: '/images/Apple.jpg',
    category: 'fruit'
  },
  {
    name: 'Banana',
    price: 1.2,
    image: '/images/Banana.jpg',
    category: 'fruit'
  },
  {
    name: 'Orange',
    price: 2.0,
    image: '/images/Orange.jpg',
    category: 'fruit'
  },
  {
    name: 'Strawberry',
    price: 4.0,
    image: '/images/Strawberry.jpg',
    category: 'fruit'
  },
  {
    name: 'Watermelon',
    price: 2.5,
    image: '/images/cart-img-1.png',
    category: 'fruit'
  },
  {
    name: 'Pineapple',
    price: 3.0,
    image: '/images/Pineapple.jpg',
    category: 'fruit'
  },
  {
    name: 'Blueberry',
    price: 5.0,
    image: '/images/bluberry.jpg',
    category: 'fruit'
  },
  {
    name: 'Mango',
    price: 4.5,
    image: '/images/Mango.jpg',
    category: 'fruit'
},
{
    name: 'Grapes',
    price: 3.8,
    image: '/images/Grapes.jpg',
    category: 'fruit'
},
{
    name: 'Kiwi',
    price: 2.8,
    image: '/images/Kiwi.jpg',
    category: 'fruit'
},
{
    name: 'Peach',
    price: 3.2,
    image: '/images/Peach.jpg',
    category: 'fruit'
},
{
    name: 'Avocado',
    price: 6.0,
    image: '/images/Avocado.jpg',
    category: 'fruit'
},
{
    name: 'Raspberry',
    price: 5.5,
    image: '/images/Raspberry.jpg',
    category: 'fruit'
},
{
    name: 'Pomegranate',
    price: 4.0,
    image: '/images/Pomegranate.jpg',
    category: 'fruit'
},
{
    name: 'Sweet Potato',
    price: 1.6,
    image: '/images/Sweet Potato.jpg',
    category: 'vegetable'
},
{
    name: 'Cauliflower',
    price: 2.5,
    image: '/images/Cauliflower.jpg',
    category: 'vegetable'
},
{
    name: 'Lettuce',
    price: 1.9,
    image: '/images/Lettuce.jpg',
    category: 'vegetable'
},
{
    name: 'Corn',
    price: 1.1,
    image: '/images/Corn.jpg',
    category: 'vegetable'
},
{
    name: 'Garlic',
    price: 2.0,
    image: '/images/Garlic.jpg',
    category: 'vegetable'
},
{
    name: 'Ginger',
    price: 3.5,
    image: '/images/Ginger.jpg',
    category: 'vegetable'
},
{
    name: 'Radish',
    price: 1.2,
    image: '/images/Radish.jpg',
    category: 'vegetable'
},
{
    name: 'Zucchini',
    price: 2.3,
    image: '/images/Zucchini.jpg',
    category: 'vegetable'
},
  {
    name: 'Carrot',
    price: 1.0,
    image: '/images/Carrots.jpg',
    category: 'vegetable'
  },
  {
    name: 'Tomato',
    price: 1.5,
    image: '/images/tomato.jpg',
    category: 'vegetable'
  },
  {
    name: 'Broccoli',
    price: 2.2,
    image: '/images/brocolli.jpg',
    category: 'vegetable'
  },
  {
    name: 'Spinach',
    price: 1.8,
    image: '/images/spinach.jpg',
    category: 'vegetable'
  },
  {
    name: 'Potato',
    price: 1.3,
    image: '/images/potato.jpg',
    category: 'vegetable'
  },
  {
    name: 'Onion',
    price: 1.0,
    image: '/images/product-2.png',
    category: 'vegetable'
  },
  {
    name: 'Bell Pepper',
    price: 2.5,
    image: '/images/bellpepper.jpg',
    category: 'vegetable'
  },
  {
    name: 'Cucumber',
    price: 1.7,
    image: '/images/cucumber.jpg',
    category: 'vegetable'
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Products Seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
