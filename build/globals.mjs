/**
 * @summary Global constants
 * @typedef GLOBALS
 * @type {Object}
 * @property {string} ROOT_PATH
 * @property {string|undefined} ROOT_DIR_NAME
 * @property {string} DOCS
 * @property {string} SRC
 * @property {string} DIST
 * @property {string} DIST_CSS
 * @property {string} DIST_TMPL
 */

/**
 * @summary Global constants
 * @type {GLOBALS}
 */
const globals = {}

globals.ROOT_PATH = process.cwd()
globals.ROOT_DIR_NAME = globals.ROOT_PATH.split('/').pop()

globals.DOCS = `${globals.ROOT_PATH}/docs`
globals.SRC = `${globals.ROOT_PATH}/src`
globals.DIST = `${globals.ROOT_PATH}/template`
globals.DIST_CSS = `${globals.DIST}/static/styles`
globals.DIST_TMPL = `${globals.DIST}/tmpl`

export { globals }
