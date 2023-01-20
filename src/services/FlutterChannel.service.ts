class FlutterChannel {
    sendMessage = (message: any) => {
        console.log('send: ', message)
        if (window.messageHandler && window.messageHandler.postMessage)
            window.messageHandler.postMessage(message);
        else
            console.log('not executed.')
    }

    backToFlutter = () => {
        console.log('back to app')
        if (window.backToFlutter && window.backToFlutter.postMessage)
            window.backToFlutter.postMessage();
        else
            console.log('not executed.')
    }
}

export default new FlutterChannel()