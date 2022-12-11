import prerender from 'prerender'
import memoryCache from 'prerender-memory-cache'

const server = prerender({
  chromeLocation: '/opt/render/project/.render/chrome/opt/google/chrome/',
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu'],
  waitAfterLastRequest: 0.2 * 1000,
  pageDoneCheckInterval: 0.5 * 1000,
  pageLoadTimeout: 5 * 1000
})

server.use(prerender.removeScriptTags())
server.use(memoryCache)

server.start()
