const { autoUpdater } = require('electron-updater')
const { dialog } = require('electron')

autoUpdater.logger = require('electron-log')
autoUpdater.logger.transports.file.level = "info"
autoUpdater.autoDownload = false

module.exports = () => {
    autoUpdater.checkForUpdates()

    autoUpdater.on('update-available', () => {
        dialog.showMessageBox({
            title: 'info',
            title: 'Udate available',
            message: 'A new version of Record_IT is available Do you want to update now ?',
            buttons: ['Update', 'No']
        }, (index) => {
            if (index == 0)
                autoUpdater.downloadUpdate()
        })


    })

    autoUpdater.on('update-downloaded', () => {
        dialog.showMessageBox({
            title: 'info',
            title: 'Udate ready',
            message: 'Install and restart',
            buttons: ['Yes', 'Later']
        }, (index) => {
            if (index == 0)
                autoUpdater.quitAndInstall(false, true)
        })
    })

}