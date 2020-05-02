<template>
  <div class="page games">
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
    hrefGame: 'games/breakout',
    hrefCode: 'https://github.com/Sun0fABeach/breakout',
    imgSrc: imgBreakout,
    imgAlt: 'Breakout',
  },
  battleship: {
    heading: 'Battleship',
    hrefGame: 'http://www.battleship-online.com',
    hrefCode: 'https://github.com/Sun0fABeach/battleship_online',
    imgSrc: imgBattleship,
    imgAlt: 'Battleship',
  },
  evolife: {
    heading: 'Evolife',
    hrefGame: 'games/evolife',
    hrefCode: 'https://github.com/Sun0fABeach/EvolutronicLife',
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
.games {
  display: flex;
  flex-direction: column;

  .thumbnails {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      width: 70%;
      margin-top: 3.5rem;
      &:first-of-type {
        margin-top: 1.875rem;
      }
    }
  }
}

@media (min-width: $min-tablet) {
  .games {
    .thumbnails {
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;

      > * {
        width: 35%;
        margin-top: 4rem;
        &:first-of-type {
          margin-top: 4rem;
        }
      }
    }
  }
}

@media (min-width: $min-desktop) {
  .games {
    .thumbnails {
      > * {
        width: 20%;
        margin-top: 4.5rem;
        &:first-of-type {
          margin-top: 4.5rem;
        }
      }
    }
  }
}
</style>
