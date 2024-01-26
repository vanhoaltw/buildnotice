import path from 'path'
import fs from 'fs'
import { safeParse } from './string'

export function getPackageInfo() {
  const packageJsonPath = path.join('package.json')
  return safeParse(fs.readFileSync(packageJsonPath).toString())
}
