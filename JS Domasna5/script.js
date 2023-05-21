// 1. LandscapeOrPortrait ========================

function LandscapeOrPortrait (width, height) {
    if (width > height) {
        return "The dimensions are for a Landscape";
    } else if (width < height) {
        return "The dimensions are for a Potrait";
    } else {
        return "It's a square";
    };
};

console.log (LandscapeOrPortrait(70, 90));
console.log (LandscapeOrPortrait(100, 90));
console.log (LandscapeOrPortrait(100, 100));



// 2. SpeedLimits =============================

function SpeedLimits (speed) {
    let penalty = ((speed-50) / 5)
    if (speed<=50) {
        return "Safe driving. Continue.";
    } else if (speed>50 && speed<170) {
        return `Speed Limit Crossed. Penalty points: ${penalty}`;
    } else if (speed >= 170) {
        return "License Suspended";
    }
};

console.log (SpeedLimits(35));
console.log (SpeedLimits(55));
console.log (SpeedLimits(170));




