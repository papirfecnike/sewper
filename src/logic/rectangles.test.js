import { calculateTorso, calculateArm, calculateNeck, validateTorsoParameters, validateArmParameters, validateNeckParameters } from './rectangles.js';

test('calculate Torso rectangles correctly', () => {
    const torsoParameters = {
        chestWidth: 60,
        waistWidth: 40,
        hipWidth: 80,
        fullLength: 90,
        seamWidth: 2
    }
    const rectangleArea = calculateTorso(torsoParameters);
    expect(rectangleArea).toBe(7896);
});

test('calculate Arm rectangles correctly', () => {
    const armParameters = {
        armCircumference: 50,
        armLength: 30,
        seamWidth: 2
    }
    const rectangleArea = calculateArm(armParameters);
    expect(rectangleArea).toBe(1836);
});

test('calculate Neck rectangles correctly', () => {
    const neckParameters = {
        width: 10,
        length: 40,
        seamWidth: 2
    }
    const rectangleArea = calculateNeck(neckParameters);
    expect(rectangleArea).toBe(616);
});

test('validate Torso keys', () => {
    const torsoParameters = {
        chestWidth: 60,
        waistWidth: 40,
        hipWidth: 80,
        fullLength: 90,
        seamWidth: 2
    }
    expect(validateTorsoParameters(torsoParameters)).toBe(true);
});

test('validate Arm keys', () => {
    const armParameters = {
        armCircumference: 50,
        armLength: 30,
        seamWidth: 2
    }
    expect(validateArmParameters(armParameters)).toBe(true);
});

test('validate Neck keys', () => {
    const neckParameters = {
        width: 10,
        length: 40,
        seamWidth: 2
    }
    expect(validateNeckParameters(neckParameters)).toBe(true);
});

test.todo("calculateArea")