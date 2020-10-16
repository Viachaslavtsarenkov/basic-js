const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let t = Math.log(MODERN_ACTIVITY/ sampleActivity);
    let result = t / (0.693 / HALF_LIFE_PERIOD);
    if (typeof result !== 'int') return false;
    return result;
};
