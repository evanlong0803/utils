/**
 * 数组递归扁平化
 * @param {Array} target 源数组 - 必填
 * @param {Function} transform 回调函数，转换数据结构 - 非必填
 * @param {String} childName 子数组键名，默认为children - 非必填
 * @returns data - 扁平化的新数组
 */
export const arrayFlat = (
  target: any[],
  transform?: (item: any, index: number) => any,
  childName: string = 'children'
) => {
  let data: any[] = [];
  target.forEach((item) => {
    Object.keys(item).length && data.push(item);
    if (item[childName]) {
      data = data.concat(arrayFlat(item[childName], transform, childName));
    }
  });
  return transform
    ? data.map((item, index) => transform(item, index))
    : data.map(({ [childName]: children, ...item }) => item);
};
