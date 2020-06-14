import atSongs from './at'

const at = {
  author: 'Halfsecondsleep',
  title: 'Halfsecondsleep - AT',
  songs: atSongs.map((song) => ({
    artist: 'Halfsecondsleep',
    album: 'AT',
    ...song,
  })),
}

export { at }
