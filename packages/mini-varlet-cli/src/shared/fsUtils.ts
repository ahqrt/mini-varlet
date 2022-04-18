import glob from 'glob'

export function globPromise(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(path, (err, files) => {
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
}
