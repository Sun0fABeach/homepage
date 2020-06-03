const path = require('path')
const fs = require('fs')
const glob = require('glob')
const { map, zipObject, groupBy, transform } = require('lodash')

function toDisplay(s, fullUpcase = false) {
  return s
    .split('_')
    .map((word) => {
      if (fullUpcase) {
        return word.toUpperCase()
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    })
    .join(' ')
}

const filePaths = glob.sync('assets/audio/**/*.mp3')

const parsed = map(filePaths, (filePath) =>
  zipObject(['band', 'album', 'song'], filePath.split(path.sep).slice(2))
)

const grouped = groupBy(parsed, (entry) => `${entry.band}-${entry.album}`)

const final = transform(grouped, (result, songs, playlistKey) => {
  const isAT = songs[0].album === 'at'
  const bandDisplay = toDisplay(songs[0].band)
  const albumDisplay = toDisplay(songs[0].album, isAT)

  result[playlistKey] = {
    author: bandDisplay,
    title: `${bandDisplay} - ${albumDisplay}`,
    songs: map(songs, (entry) => ({
      name: toDisplay(entry.song.slice(3, entry.song.lastIndexOf('.')), isAT),
      artist: bandDisplay,
      album: albumDisplay,
    })),
  }
})

const json = JSON.stringify(final, undefined, 2)

fs.writeFile('assets/audio/playlists.json', json, 'utf8', (err) => {
  if (err) {
    console.log('An error occured while writing JSON Object to File.')
    return console.error(err)
  }
  console.log('JSON file has been written.')
})
