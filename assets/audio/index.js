import { each } from 'lodash-es'
import { escalate } from './reckless'
import { sinceYouWereNotHere, hataera } from './coshima'
import { at } from './halfsecondsleep'

import playlists from './playlists.json'

const playlistMap = {
  'reckless-escalate': escalate,
  'coshima-since_you_were_not_here': sinceYouWereNotHere,
  'coshima-hataera': hataera,
  'halfsecondsleep-at': at,
}

each(playlistMap, (songs, key) => {
  each(songs, (song, idx) => {
    playlists[key].songs[idx].url = song
  })
})

export default playlists
