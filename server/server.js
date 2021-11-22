const dotenv = require('dotenv');
require('colors');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🔥 Shutting down...'.red.bold);
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

app.set('port', process.env.PORT || 5555);

const server = app.listen(app.get('port'), () =>
  console.log(`Server running on port → ${server.address().port}`.blue.bold)
);
