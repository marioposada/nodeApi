const dotenv = require('dotenv');
const app = require('./app')

console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});