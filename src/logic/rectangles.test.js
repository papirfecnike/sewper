import { calculateTorso, calculateArm, calculateNeck } from './rectangles.js';

test('calculate Torso rectangles correctly', () => {
    const rectangleArea = calculateTorso(60, 40, 80, 2, 90);
    expect(rectangleArea).toBe(7896);
});

test('calculate Arm rectangles correctly', () => {
    const rectangleArea = calculateArm(50, 2, 30);
    expect(rectangleArea).toBe(1836);
});

test('calculate Neck rectangles correctly', () => {
    const rectangleArea = calculateNeck(10, 40, 2);
    expect(rectangleArea).toBe(616);
});