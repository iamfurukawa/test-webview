class FlutterChannel {
    sendMessage = (message: any) => {
        if (window.messageHandler && window.messageHandler.postMessage)
            window.messageHandler.postMessage('Hello from JS' + count);
        else
            console.log('not executed.')
    }

    backToFlutter = () => {
        if (window.backToFlutter && window.backToFlutter.postMessage)
            window.backToFlutter.postMessage();
        else
            console.log('not executed.')
    }
}

export default new FlutterChannel()