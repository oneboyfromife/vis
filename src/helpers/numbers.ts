export function formatAsMoney(value: number | string) {
  // Convert the number to a string and split it into whole and decimal parts
  const parts = value.toString().split('.');

  // Format the whole part with commas for thousands separators
  const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine the whole and decimal parts back together
  if (parts.length === 2) {
    return `${wholePart}.${parts[1].slice(0, 2)}`;
  } else {
    return wholePart;
  }
}

export function reverseFormatAsMoney(value: string) {
  // Convert the number to a string and split it into whole and decimal parts

  // Format the whole part with commas for thousands separators
  const wholePart = value.replace(',', '');

  return wholePart;
}

export const formatExp = (value: string): string | undefined => {
  if (typeof parseInt(value, 10) !== 'number') {
    return;
  }
  if (value.length === 3 && !value.includes('/')) {
    return `${value.slice(0, 2)}/${value.slice(2)}`;
  }
  return value;
};

export function calculateMatchPercentage(str: string) {
  const uppercaseRegex = /[A-Z]/;
  const uniqueCharacterRegex = /[!@#$%&*?]/;

  let matchCount = 0;

  if (str.length >= 8) {
    matchCount++;
  }

  if (uppercaseRegex.test(str)) {
    matchCount++;
  }

  if (uniqueCharacterRegex.test(str)) {
    matchCount++;
  }

  const percentage = (matchCount / 3) * 100;

  return percentage;
}
