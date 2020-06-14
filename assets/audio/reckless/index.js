import escalateSongs from './escalate'

const escalate = {
  author: 'Reckless',
  title: 'Reckless - Escalate',
  songs: escalateSongs.map((song) => ({
    artist: 'Reckless',
    album: 'Escalate',
    ...song,
  })),
}

export { escalate }
