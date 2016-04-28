import appFactory from './app'

/**
Entry point for the application and thus selfexecuting.
Called by npm start script
@returns {null} Returns null.
*/
function create() {
  appFactory.create()
}

process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
  console.log(err.stack)
});

create()
