export function random_idx(array: Array<any>): number {
  return Math.floor(Math.random() * array.length);
}

export function random_elem(array: Array<any>): any {
  return array[random_idx(array)];
}

/**
 * @param {HouseholdType[]} households
 * @param {number} size - num of households
 * @returns {HouseholdType[]}
 */
export function random_households(
  households: HouseholdType[],
  size: number = 100
): HouseholdType[] {
  const res: HouseholdType[] = [];
  for (let i = 0; i < size; i++) {
    res.push(households[random_idx(households)]);
  }
  return res;
}
