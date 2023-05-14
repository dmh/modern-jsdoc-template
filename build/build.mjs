import { cleanTemplate } from './clean.mjs'
import { copyDefaultJSDocTemplate, copyGithubDarkJSDocTemplate } from './copy.mjs'
import { checkNode } from './check.mjs'
checkNode()

/**
 * @summary Build the template
 * @async
 * @returns undefined
 */
async function build () {
  await cleanTemplate()
  await copyDefaultJSDocTemplate()
  await copyGithubDarkJSDocTemplate()
}

export { build }
