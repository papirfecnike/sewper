import { calculateTorso, calculateArm, calculateNeck, validateTorsoParameters, validateArmParameters, validateNeckParameters, calculateArea } from './rectangles.js';

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

//  return (width + (seam * 2)) * (length + (seam * 2));
test('validation of Area calculation function', () => {
    const width = 20;
    const length = 10;
    const seam = 2;
    const result = calculateArea(width, length, seam);
    expect(result).toBe(336);
});