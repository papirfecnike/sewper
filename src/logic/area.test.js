import { calculateMaterialLength, isValidParameter } from './area.js';

test('calculate Material length', () => {
    const torsoParameters = {
        chestWidth: 60,
        waistWidth: 40,
        hipWidth: 80,
        fullLength: 90,
        seamWidth: 2
    }
    const armParameters = {
        armCircumference: 30,
        armLength: 20,
        seamWidth: 2
    }
    const neckParameters = {
        width: 40,
        length: 10,
        seamWidth: 2
    }
    const materialWidth = 150;

    const materialLength = calculateMaterialLength(torsoParameters, armParameters, neckParameters, materialWidth);

    expect(materialLength).toBe(120.26666666666667);
});

test('isValidParameter throws error if any of the values is not a number', () => {
    const param = {
        checkingvalue1: 24,
        checkingvalue2: "string"
    }
    expect(() => {
        isValidParameter(param);
      }).toThrow();
});

test('isValidParameter returns true if all parameters are numbers', () => {
    const param = {
        checkingvalue1: 24,
        checkingvalue2: 655,
    }
    expect(isValidParameter(param)).toBe(true);
});