function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof bool === 'boolean' && (bool || !bool);
  }
  
  booWho(null);