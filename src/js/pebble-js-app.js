Pebble.addEventListener('ready', function() {
  if(Pebble.getActiveWatchInfo && Pebble.getActiveWatchInfo().platform === 'basalt') {
    // This is the Basalt platform
    console.log('PebbleKit JS ready on Basalt!');
  } else {
    // This is the Aplite platform
    console.log('PebbleKit JS ready on Aplite!');
  }
});  
