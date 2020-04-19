// Torso = [Widest of (Chest width, Waist width, Hip width) + Seam width x 2] x (Full length + Seam width x 2)

export function calculateTorso(chestWidth, waistWidth, hipWidth, seamWidth, fullLength) {
    const widestWidth = Math.max(chestWidth, waistWidth, hipWidth);
    const area = calculateArea(widestWidth, fullLength, seamWidth);
    return area;
}

// Arms = (Arm circumference + Seam width x 2) x (Arm length + Seam width x 2)

export function calculateArm(armCircumference, seamWidth, armLength) {
    const area = calculateArea(armCircumference, armLength, seamWidth);
    return area;
}

// Neck = (Width + Seam width x 2) x (Length + Seam width x 2)

export function calculateNeck(width, length, seamWidth) {
    const area = calculateArea(width, length, seamWidth);
    return area;
}

// logic

function calculateArea (width, length, seam) {
    return (width + (seam * 2)) * (length + (seam * 2));
}