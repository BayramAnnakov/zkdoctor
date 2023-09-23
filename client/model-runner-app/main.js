const {app, BrowserWindow, ipcMain} = require('electron')

const path = require('path')

const nodeChildProcess = require('child_process');

async function generateProof () {
    let script = nodeChildProcess.spawn('bash', ['test.sh']);

    console.log('PID: ' + script.pid);

    script.stdout.on('data', (data) => {
        console.log('stdout: ' + data);
    });

    script.stderr.on('data', (err) => {
        console.log('stderr: ' + err);
    });

    script.on('exit', (code) => {
        console.log('Exit Code: ' + code);

        
    });

    return "pid: " + script.pid;
}

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1024, 
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    
    })
    
    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('model:generateProof', generateProof)
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    }
    )
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

