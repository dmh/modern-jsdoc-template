import { deleteAsync } from 'del'
import { globals } from './globals.mjs'

/**
 * @summary Clean the template folder
 * @async
 * @returns undefined
 */
async function cleanDist () {
  try {
    if (globals.ROOT_DIR_NAME === 'dark-jsdoc-default') {
      await deleteAsync([`${globals.DIST}/**/*`])
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary Clean the docs folder
 * @async
 * @returns undefined
 */
async function cleanDocs () {
  try {
    if (globals.ROOT_DIR_NAME === 'dark-jsdoc-default') {
      await deleteAsync([`${globals.DOCS}/**/*`])
    }
  } catch (error) {
    console.error(error)
  }
}

export { cleanDist, cleanDocs }
