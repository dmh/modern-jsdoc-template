import fsPromises from 'fs/promises'
import cpy from 'cpy'
import { globals } from './globals.mjs'

/**
 * @summary Copy the default JSDoc template from node_modules
 * @async
 * @returns undefined
 */
async function copyDefaultJSDocTemplate () {
  try {
    await cpy('node_modules/jsdoc/templates/default/tmpl/**', `${globals.DIST}/tmpl`)
    await cpy('node_modules/jsdoc/templates/default/publish.js', globals.DIST, { flat: true })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary Copy theme JSDoc templates
 * @async
 * @returns undefined
 */
async function copyThemeJSDocTemplate () {
  try {
    await cpy(`${globals.SRC}/templates/**`, globals.DIST_TMPL)
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary Copy template CSS to docs folder
 * @async
 * @returns undefined
 */
async function copyCss () {
  try {
    await fsPromises.mkdir(`${globals.DOCS}/styles`, { recursive: true })
    await cpy(`${globals.DIST_CSS}/**`, `${globals.DOCS}/styles`)
  } catch (error) {
    console.error(error)
  }
}

export { copyDefaultJSDocTemplate, copyThemeJSDocTemplate, copyCss }
