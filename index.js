import { executablePath } from 'puppeteer'
import prerender from 'prerender'
import prerenderMemoryCache from 'prerender-memory-cache'

const server = prerender({
  chromeLocation: executablePath(),
  waitAfterLastRequest: 2 * 1000,
  pageDoneCheckInterval: 0.5 * 1000,
  pageLoadTimeout: 60 * 1000
})

server.use(prerender.removeScriptTags())
server.use(prerenderMemoryCache)

server.start()
