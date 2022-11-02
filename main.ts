input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 0; index++) {
        led.toggle(index, 0)
    }
    basic.pause(100)
    for (let index = 0; index <= 1; index++) {
        led.toggle(0, index)
    }
    for (let index = 0; index <= 1; index++) {
        led.toggle(index, 0)
    }
    for (let index = 0; index <= 1; index++) {
        led.toggle(2, 2)
    }
    for (let index = 0; index <= 2; index++) {
        led.toggle(1, 1)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 2)
    }
    for (let index = 0; index <= 2; index++) {
        led.toggle(index, 2)
    }
    for (let index = 0; index <= 2; index++) {
        led.toggle(2, index)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 3)
    }
    for (let index = 0; index <= 3; index++) {
        led.toggle(index, 3)
    }
    for (let index = 0; index <= 3; index++) {
        led.toggle(3, index)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, index)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 4)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 3)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 3)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 2)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 3)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 2)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 2)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(1, 1)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(1, 2)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 1)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(1, 3)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 1)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(1, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 1)
    }
    basic.pause(100)
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 1)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(1, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 2)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(2, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 3)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(3, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(4, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 5)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(5, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    control.reset()
})
