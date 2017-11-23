var playlist = {Mindy: "Yodel"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})

};

// function removeFromPlaylist(playlist, artistName){
//   delete playlist.artistName;
// }

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}

// var playlist = {'Jay Z': 'Monster'};
//
// function updatePlaylist(object, key, value){
// return Object.assign({}, object, { [key]: value})
// }
//
// function removeFromPlaylist(playlist, artistName){
//   delete playlist[artistName]
//   return playlist
// }
