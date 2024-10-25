export const makeMeTwoDigits = (n: number) => {
  return n < 10 ? `0${n}` : n
}

export const trimString = (str: string) => {
  return `${str.slice(0, 4)}...${str.slice(39,)}`
}

export const abbriviate = (num: number) => {
  if (num >= 1000) {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(num) / 3);
    const abbreviatedNum = num / Math.pow(10, suffixIndex * 3);
    return abbreviatedNum.toFixed(1) + suffixes[suffixIndex];
  } else {
    return num.toString();
  }
}