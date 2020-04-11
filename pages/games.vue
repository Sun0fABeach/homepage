<template>
  <div id="games">
    <h1>Games</h1>
    <div class="thumbnails">
      <GameThumbnail v-bind="breakout" />
      <GameThumbnail v-bind="battleship" />
      <GameThumbnail v-bind="evolife" />
    </div>
  </div>
</template>

<script>
import GameThumbnail from '@/components/GameThumbnail'
import imgBreakout from '@/assets/images/breakout.png'
import imgBattleship from '@/assets/images/battleship.png'
import imgEvolife from '@/assets/images/evolife.png'

const imgData = {
  breakout: {
    heading: 'Breakout',
    href: 'games/breakout',
    imgSrc: imgBreakout,
    imgAlt: 'Breakout',
  },
  battleship: {
    heading: 'Battleship',
    href: 'http://www.battleship-online.com',
    imgSrc: imgBattleship,
    imgAlt: 'Battleship',
  },
  evolife: {
    heading: 'Evolife',
    href: 'games/evolife',
    imgSrc: imgEvolife,
    imgAlt: 'Evolife',
  },
}

export default {
  components: { GameThumbnail },
  data() {
    return imgData
  },
}
</script>

<style lang="scss" scoped>
#games {
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-family: $font-games;
    font-weight: normal;
    font-size: 3rem;
    margin-top: 2rem;
  }

  .thumbnails {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      width: 70%;
      margin-top: 3.5rem;
      &:first-of-type {
        margin-top: 2.25rem;
      }
    }
  }
}

@media (min-width: $min-tablet) {
  #games {
    .thumbnails {
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;

      > * {
        width: 35%;
        margin-top: 3rem;
        &:first-of-type {
          margin-top: 3rem;
        }
      }
    }
  }
}

@media (min-width: $min-desktop) {
  #games {
    .thumbnails {
      > * {
        width: 20%;
        margin-top: 2rem;
        &:first-of-type {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
