bluetooth.onBluetoothConnected(function () {
    bluetoothconnected = 1
})
bluetooth.onBluetoothDisconnected(function () {
    bluetoothconnected = 0
})
input.onButtonPressed(Button.A, function () {
    if (enabled == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        enabled = 0
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        enabled = 1
    }
})
let bluetoothconnected = 0
let enabled = 0
enabled = 0
mouse.startMouseService()
basic.forever(function () {
    if (enabled == 1 && bluetoothconnected == 1) {
        mouse.click()
    }
    if (bluetoothconnected == 0) {
        basic.showString("" + (control.deviceSerialNumber()))
    }
})
