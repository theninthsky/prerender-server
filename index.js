import prerender from 'prerender'
import memoryCache from 'prerender-memory-cache'
import { exec } from 'child_process'

exec('pwd')

const server = prerender({
  chromeLocation: './chrome/opt/google/chrome/test',
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars'],
  waitAfterLastRequest: 0.2 * 1000,
  pageDoneCheckInterval: 0.5 * 1000,
  pageLoadTimeout: 5 * 1000
})

server.use(prerender.removeScriptTags())
server.use(memoryCache)

server.start()
