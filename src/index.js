const app = require('./app');
require('./database');

async function init() {
   await app.listen(app.get('PORT'));
   console.log('server on port', app.get('PORT'));
}

init();
