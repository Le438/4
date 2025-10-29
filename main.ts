basic.forever(function () {
    if (led.brightness() < 79) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.setLedColor(0x999999)
    } else if (input.lightLevel() > 80 && input.lightLevel() < 180) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.setLedColor(0xff0080)
    }
})
