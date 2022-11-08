function Baile1 () {
    robotbit.Servo(robotbit.Servos.S2, 135)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 90)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(200)
}
function Inicio () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
function Baile2 () {
    robotbit.Servo(robotbit.Servos.S2, 150)
    robotbit.Servo(robotbit.Servos.S4, 30)
    robotbit.Servo(robotbit.Servos.S7, 30)
    robotbit.Servo(robotbit.Servos.S5, 30)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
}
basic.showLeds(`
    . . . . .
    . # # # .
    # . . . #
    # . . . #
    . . . . .
    `)
Inicio()
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(5000)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        Baile1()
    }
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        Baile2()
    }
})
