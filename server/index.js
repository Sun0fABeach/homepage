const path = require('path')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  const { nuxt, host, port } = await buildNuxt()

  app.use(
    '/games/breakout',
    express.static(path.join('games', 'breakout', 'dist'))
  )
  app.use(
    '/games/evolife',
    express.static(path.join('games', 'EvolutronicLife', 'dist'))
  )
  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}

async function buildNuxt() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  return { nuxt, host, port }
}

start()
