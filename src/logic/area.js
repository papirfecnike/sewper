// Torso x 2, Arms x 2, Neck x 1
/* Parameters: Material width, Seam width, Full length, Chest width,
   Waist width, Hip width, Arm circumference, Arm length, Neck width, Neck length */

import { calculateTorso, calculateArm, calculateNeck } from './rectangles.js';

const isNumber = function (num) {
    return typeof num === "number"
}

export function calculateMaterialLength(formFields) {
    const { materialWidth } = formFields
    isValidParameter(formFields)
    if (!isNumber(materialWidth)) {
        throw new Error ("Please type correct value. Parameter materialWidth is not a number.")
    }

    const torsoArea = calculateTorso(formFields)
    const armArea = calculateArm(formFields)
    const neckArea = calculateNeck(formFields)
    const fullArea = (2 * torsoArea) + (2 * armArea) + neckArea
    const materialLength = fullArea / materialWidth

    return materialLength;
}

export function isValidParameter (parameter) {
    Object.entries(parameter).forEach(function (item) {
        if (!isNumber(item[1])) {
            throw new Error ("Please type correct value. Parameter key " + item[0] + " is not a number.")
        }
    })
    return true;
}
