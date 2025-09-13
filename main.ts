input.onButtonPressed(Button.A, function () {
    encendido = !(encendido)
})
let encendido = false
basic.clearScreen()
encendido = false
basic.forever(function () {
    if (encendido == true) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
