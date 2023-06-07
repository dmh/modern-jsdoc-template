import fsPromises from 'fs/promises'
import postcss from 'postcss'
import cssimport from 'postcss-import'
import cssnano from 'cssnano'
import { globby } from 'globby'
import { globals } from './globals.mjs'

/**
 * @summary Compile Css
 * @async
 * @returns undefined
 */
async function compileCss () {
  try {
    const files = await globby(`${globals.SRC}/styles/*.css`, { objectMode: true })
    if (files !== undefined) {
      for await (const file of files) {
        const css = await fsPromises.readFile(file.path)
        const postcssResult = await postcss().use(cssimport()).process(css, {
          from: file.path,
          map: {
            inline: false,
            annotation: `${file.name}.map`
          }
        })
        const folderName = 'template/static/styles'
        console.log(`${folderName}/${file.name}`)
        console.log(`${folderName}/${file.name}.map`)
        await fsPromises.mkdir(globals.DIST_CSS, { recursive: true })
        await fsPromises.writeFile(`${globals.DIST_CSS}/${file.name}`, postcssResult.css)
        if (postcssResult.map) {
          await fsPromises.writeFile(`${globals.DIST_CSS}/${file.name}.map`, postcssResult.map.toString())
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary Compile minified CSS
 * @async
 * @returns undefined
 */
async function compileMinCss () {
  try {
    const files = await globby(`${globals.SRC}/styles/*.css`, { objectMode: true })
    if (files !== undefined) {
      for await (const file of files) {
        const css = await fsPromises.readFile(file.path)
        const postcssResult = await postcss().use(cssimport()).use(cssnano()).process(css, {
          from: file.path
        })
        const folderName = 'template/static/styles'
        console.log(`${folderName}/${file.name.slice(0, -4)}.min.css`)
        await fsPromises.mkdir(globals.DIST_CSS, { recursive: true })
        await fsPromises.writeFile(`${globals.DIST_CSS}/${file.name.slice(0, -4)}.min.css`, postcssResult.css)
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export { compileCss, compileMinCss }
