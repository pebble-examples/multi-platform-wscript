if(Pebble.getActiveWatchInfo && Pebble.getActiveWatchInfo().platform === 'basalt') {
    // This is the Basalt platform
    Pebble.addEventListener('ready', function() {
      console.log('PebbleKit JS ready on Basalt!');
    });  
} else {
  // This is the Aplite platform
  Pebble.addEventListener('ready', function() {
    console.log('PebbleKit JS ready on Aplite!');
  });
}