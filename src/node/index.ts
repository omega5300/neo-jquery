import { writeFile } from "node:fs/promises"

const $writeFile = async (filename: string, data: any | any[]) => {
  // detect falsy values
  if (!data) {
    console.error('$writeFile no using falsy values')
    return;
  }
  
  if(typeof data === 'boolean') {
    console.info('$writeFile no using boolean types')
    return;
  }
  
  try {
    await writeFile(filename, data)
  } catch (err) {
    console.error((err as Error).message)
  }
}

export { $writeFile }
