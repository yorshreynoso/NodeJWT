const app = require('./app');


async function init() {
   await app.listen(app.get('PORT'));
   console.log('server on port', app.get('PORT'));
}

init();
