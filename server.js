const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(DB);
    const Tour = mongoose.model('Tour', tourSchema);

    const testTour = new Tour({
      name: 'The Forest Hiker',
      rating: 4.7,
      price: 497,
    });

    testTour.save((err) => {
      console.log('ERROtrtrtrtrtrR:', err);
    });
  } catch (err) {
    console.log(err);
  }
}
connectDB();

const app = require('./app');

// console.log(process.env.NODE_ENV);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
