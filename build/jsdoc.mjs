import { execa } from 'execa'

/**
 * ## run jsdoc build
 * @async
 * @memberof SHELL
 * @returns undefined
 * @throws error
 */
async function jsdocBuild () {
  try {
    const jsdocConfig = [
      '-c',
      'jsdoc.json'
    ]
    await execa('npm', ['exec', '--', 'jsdoc', ...jsdocConfig])
  } catch (error) {
    console.error(error)
  }
}

export { jsdocBuild }
