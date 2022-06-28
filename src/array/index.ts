/**
 * 数组递归扁平化
 * @param {array} target - 源数组
 * @param {string} childName - 子数组键名
 * @returns {T[]} data - 扁平化的新数组
 */
export const arrayFlat = <T>(
  target: T[],
  data: T[] = [],
  childName: string = 'children'
): T[] => {
  target.forEach((item: T & { [childName: string]: any }) => {
    item[childName].length && data.push(item);
    item[childName] && arrayFlat(item[childName], data, childName);
  });
  return data.map((item: T & { [childName: string]: any }) => ({
    ...item,
    [childName]: undefined,
  }));
};
