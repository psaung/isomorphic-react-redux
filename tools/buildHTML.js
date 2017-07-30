/* eslint-disable no-console */

import fs from 'fs'
import cheerio from 'cheerio'

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err)
  }

  const $ = cheerio.load(markup)
  $('head').prepend('<link rel="stylesheet" href="style.css" />')

  return fs.writeFile('dist/index.html', $.html(), 'utf-8', error => {
    if (error) {
      return console.log(error)
    }
    return console.log(`index.html written to /dist`)
  })
})
