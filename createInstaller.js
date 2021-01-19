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
    appDirectory: path.join(outPath, 'electron-publish-example-win32-x64/'),
    authors: 'Christian Engvall',
    noMsi: true,
    outputDirectory: path.join(outPath),
    exe: 'electron-publish-example.exe',
    setupExe: 'ElectronTutorialAppInstaller.exe',
   
  })
}