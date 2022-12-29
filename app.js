
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());





// Retornar todos los tours
app.get('/api/v1/tours', getAllTours);

// Retornar un tour
app.get('/api/v1/tours/:id', getTour);

// Crear un nuevo tour
app.post('/api/v1/tours', createTour);

// Actualizar un tour
app.patch('/api/v1/tours/:id', updateTour);

// Eliminar un tour
app.delete('/api/v1/tours/:id', deleteTour);

// Funciones para manejar los usuarios



// Tours Router



app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
