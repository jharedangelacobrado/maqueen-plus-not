function Line_patrol () {
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
    }
}
maqueenPlusV2.I2CInit()
basic.forever(function () {
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
        if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 || (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 || maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1)) {
            Line_patrol()
        }
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 200)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
        if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 || (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 || maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1)) {
            Line_patrol()
        }
    }
    Line_patrol()
})
