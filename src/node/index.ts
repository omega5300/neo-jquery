import { writeFile } from "node:fs/promises"
import { 
  arch, 
  cpus, 
  freemem,
  totalmem,
  platform,
  version,
  release,
  machine,
} from 'node:os'

interface Props {
  [s: string]: any;
}

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

const $osInfo: Readonly<Props> = {
  systemName: platform(),
  kernel: release(),
  osVersion: version(),
  arch: arch(),
  machine: machine(),
  cpu: cpus()[0].model,
  speed: `${(cpus()[0].speed / 1e3).toFixed(2)} Ghz`,
  totalRam: `${(totalmem() / 1e9).toFixed(2)} GB`,
  freeRam: `${(freemem() / 1e9).toFixed(2)} GB`,
}


export { $writeFile, $osInfo }
