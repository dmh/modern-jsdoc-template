import { cleanDist, cleanDocs } from './clean.mjs'
import { copyDefaultJSDocTemplate, copyThemeJSDocTemplate } from './copy.mjs'
import { checkNode } from './check.mjs'
import { compileCss, compileMinCss } from './css.mjs'
import { jsdocBuild } from './jsdoc.mjs'
checkNode()

/**
 * @summary Build the template
 * @async
 * @returns undefined
 */
async function build () {
  await cleanDist()
  await compileCss()
  await compileMinCss()
  await copyDefaultJSDocTemplate()
  await copyThemeJSDocTemplate()
}

async function buildDocs () {
  await cleanDocs()
  await jsdocBuild()
}

export { build, buildDocs }
