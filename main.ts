let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
