function validaViajes () {
    if (coordX >= 0 && coordX <= 4 && (coordY >= 0 && coordY <= 4)) {
        movimientos += 1
        basic.showString("M:" + movimientos)
    }
    if (movimientos == 9) {
        vuelos += 1
        basic.showString("V:" + vuelos)
    } else if (movimientos > 9) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(200)
        }
        led.unplot(coordX, coordY)
        basic.clearScreen()
        coordX = 0
        coordY = 0
        movimientos = 0
        led.plot(0, 0)
    }
    if (vuelos == 5) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(200)
        }
        led.unplot(coordX, coordY)
        basic.clearScreen()
        coordX = 0
        coordY = 0
        movimientos = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    return true
}
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    coordX += -1
    basic.pause(2000)
    validaViajes()
    if (!(validaCoordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
    coordY += -1
    basic.pause(2000)
    validaViajes()
    if (!(validaCoordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
function validaCoordenadas () {
    if (coordX >= 0 && coordX < 4 && (coordY >= 0 && coordY < 4)) {
        basic.clearScreen()
        led.plot(coordX, coordY)
        return true
    } else if (coordX == 4 || coordY == 4) {
        led.plot(coordX, coordY)
        basic.showIcon(IconNames.Diamond)
        basic.clearScreen()
        led.plot(coordX, coordY)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.AB, function () {
    led.unplot(coordX, coordY)
    coordX = 0
    coordY = 0
    vuelos = 0
    movimientos = 0
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    coordX += 1
    basic.pause(2000)
    validaViajes()
    if (!(validaCoordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
    coordY += 1
    basic.pause(2000)
    validaViajes()
    if (!(validaCoordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
let movimientos = 0
let vuelos = 0
let coordY = 0
let coordX = 0
coordX = 0
coordY = 0
vuelos = 0
movimientos = 0
led.plot(0, 0)
