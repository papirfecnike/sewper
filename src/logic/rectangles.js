// Torso = [Widest of (Chest width, Waist width, Hip width) + Seam width x 2] x (Full length + Seam width x 2)

export function calculateTorso(torsoParameters) {
    const {
        chestWidth,
        waistWidth,
        hipWidth,
        fullLength,
        seamWidth
    } = torsoParameters
    const widestWidth = Math.max(chestWidth, waistWidth, hipWidth);
    const area = calculateArea(widestWidth, fullLength, seamWidth);
    return area;
}

// Arms = (Arm circumference + Seam width x 2) x (Arm length + Seam width x 2)

export function calculateArm(armParameters) {
    const {
        armCircumference,
        armLength,
        seamWidth
    } = armParameters
    const area = calculateArea(armCircumference, armLength, seamWidth);
    return area;
}

// Neck = (Width + Seam width x 2) x (Length + Seam width x 2)

export function calculateNeck(neckParameters) {
    const {
        width,
        length,
        seamWidth
    } = neckParameters
    const area = calculateArea(width, length, seamWidth);
    return area;
}

// logic

export function calculateArea (width, length, seam) {
    return (width + (seam * 2)) * (length + (seam * 2));
}

// parameter validation

export function validateTorsoParameters (torsoParameters) {
    const torsoKeys = ["chestWidth", "waistWidth", "hipWidth", "fullLength", "seamWidth"]
    Object.keys(torsoParameters).forEach(function (key) {
        if (!torsoKeys.includes(key)) {
            throw new Error ("Please type correct key. Parameter key " + key + " is not valid.")
        }
    })
    return true;
}

export function validateArmParameters (armParameters) {
    const armKeys = ["armCircumference", "armLength", "seamWidth"]
    Object.keys(armParameters).forEach(function (key) {
        if (!armKeys.includes(key)) {
            throw new Error ("Please type correct key. Parameter key " + key + " is not valid.")
        }
    })
    return true;
}

export function validateNeckParameters (neckParameters) {
    const neckKeys = ["width", "length", "seamWidth"]
    Object.keys(neckParameters).forEach(function (key) {
        if (!neckKeys.includes(key)) {
            throw new Error ("Please type correct key. Parameter key " + key + " is not valid.")
        }
    })
    return true;
}