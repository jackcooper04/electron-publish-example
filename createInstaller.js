const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'out')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'electronpublishexample-win32-x64/'),
    authors: 'Jack Cooper',
    noMsi: false,
 
    outputDirectory: path.join(outPath,'make','squirrel.windows','x64'),
    exe: 'electronpublishexample.exe',
    setupExe: 'ElectronTutorialAppInstaller.exe',
   
  })
}