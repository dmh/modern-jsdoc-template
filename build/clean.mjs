import { deleteAsync } from 'del'

/**
 * @summary Clean the template folder
 * @async
 * @returns undefined
 */
async function cleanTemplate () {
  try {
    const currentDirPath = process.cwd()
    const currentDirName = currentDirPath.split('/').pop()
    if (currentDirName === 'github-dark-jsdoc-default') {
      await deleteAsync([`${currentDirPath}/template/**/*`])
    }
  } catch (error) {
    console.error(error)
  }
}

export { cleanTemplate }
