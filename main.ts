input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.servoWritePin(AnalogPin.P2, 1)
    servos.P0.setAngle(20)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.servoWritePin(AnalogPin.P0, 1)
    servos.P0.setAngle(130)
})
basic.forever(function () {
	
})
