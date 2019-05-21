const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
}