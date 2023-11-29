export const colorScheme = [
  "#4e79a7",
  "#e15759",
  "#f28e2c",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

export const chooseColor = (idx: number): string => {
  return colorScheme[idx % colorScheme.length];
};
