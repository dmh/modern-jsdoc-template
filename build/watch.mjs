import chokidar from 'chokidar'
import chalk from 'chalk'
import { checkNode } from './check.mjs'
import { compileCss } from './css.mjs'
import { globals } from './globals.mjs'
import { jsdocBuild } from './jsdoc.mjs'
import { copyThemeJSDocTemplate, copyCss } from './copy.mjs'
checkNode()

/**
 * @summary Watch task
 * @async
 * @returns undefined
 */
async function watchSrc () {
  try {
    chokidar.watch([`${globals.SRC}/styles/**/*.css`], { ignoreInitial: true, awaitWriteFinish: false }).on('all', (event, path) => {
      console.log(`${chalk.red(event)} ${path}`)
      compileCss()
    })
    chokidar.watch([`${globals.SRC}/templates/**/*.tmpl`], { ignoreInitial: true, awaitWriteFinish: false }).on('all', (event, path) => {
      console.log(`${chalk.red(event)} ${path}`)
      copyThemeJSDocTemplate()
    })
    chokidar.watch([`${globals.DIST_CSS}/**/*.css`], { ignoreInitial: true, awaitWriteFinish: false }).on('all', (event, path) => {
      console.log(`${chalk.red(event)} ${path}`)
      copyCss()
    })
    chokidar.watch([`${globals.DIST_TMPL}/**`], { ignoreInitial: true, awaitWriteFinish: false }).on('all', (event, path) => {
      console.log(`${chalk.red(event)} ${path}`)
      jsdocBuild()
    })
  } catch (error) {
    console.error(error)
  }
}

export { watchSrc }
