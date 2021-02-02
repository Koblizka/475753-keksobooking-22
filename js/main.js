(min, max, digits) => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return NaN;
  }

  if (max < min) {
    return 'wrong range, (max" can\'t be smaller then "min"';
  }

  if (max === min) {
    return max;
  }

  return Number.parseFloat(Math.random() * (max - min + 1) + min).toFixed(digits);
};
