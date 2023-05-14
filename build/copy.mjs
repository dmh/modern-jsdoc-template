import cpy from 'cpy'

/**
 * @summary Copy the default JSDoc template from node_modules
 * @async
 * @returns undefined
 */
async function copyDefaultJSDocTemplate () {
  try {
    await cpy('node_modules/jsdoc/templates/default/tmpl/**', 'template/tmpl')
    await cpy('node_modules/jsdoc/templates/default/publish.js', 'template', { flat: true })
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary Copy the Github Dark JSDoc template and static files
 * @async
 * @returns undefined
 */
async function copyGithubDarkJSDocTemplate () {
  try {
    await cpy('src/static/**', 'template/static')
    await cpy('src/tmpl/**', 'template/tmpl')
  } catch (error) {
    console.error(error)
  }
}

export { copyDefaultJSDocTemplate, copyGithubDarkJSDocTemplate }
