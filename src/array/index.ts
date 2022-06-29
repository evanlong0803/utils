/**
 * 数组递归扁平化
 * @param {Array} target - 源数组
 * @param {String} childName - 子数组键名
 * @returns data - 扁平化的新数组
 */
export const arrayFlat = (
  target: Array<any>,
  childName: string = 'children',
  data: Array<any> = []
) => {
  target.forEach((item) => {
    Object.keys(item).length && data.push(item);
    item[childName]?.length && arrayFlat(item[childName], childName, data);
  });
  return data.map(({ [childName]: name, ...item }) => item);
};
