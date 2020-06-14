import sinceYouWereNotHereSongs from './since_you_were_not_here'
import hataeraSongs from './hataera'

const sinceYouWereNotHere = {
  author: 'Coshima',
  title: 'Coshima - Since You Were Not Here',
  songs: sinceYouWereNotHereSongs.map((song) => ({
    artist: 'Coshima',
    album: 'Since You Were Not Here',
    ...song,
  })),
}

const hataera = {
  author: 'Coshima',
  title: 'Coshima - Hataera',
  songs: hataeraSongs.map((song) => ({
    artist: 'Coshima',
    album: 'Hataera',
    ...song,
  })),
}

export { sinceYouWereNotHere, hataera }
