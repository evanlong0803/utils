/**
 * 数组递归扁平化
 * @param {Array} target 源数组 - 必填
 * @param {Function} transform 回调函数，转换数据结构 - 非必填
 * @param {String} childName 子数组键名，默认为children - 非必填
 * @returns data - 扁平化的新数组
 * @example 
 * // 基本使用
 * arrayFlat([...])
 * // 多余处理
 * arrayFlat([...], (item:T, index:number) => ({ ...item, test:'test' }))
 */
export const arrayFlat = <T>(
  target: any[],
  transform?: (item: T, index: number) => T,
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


/**
 * 对象数组递归改变
 * @param {Array} target 源数组 - 必填
 * @param {Function} transform 回调函数，改变数据结构 - 必填
 * @param {String} childName 子数组键名，默认为children - 非必填
 * @returns data - 改变后的新数组
 * @example 
 * // 基本使用
 * arrayChange([...], (item:T, index:number) => ({ ...item, test:'test' }))
 */
export const arrayChange = <T>(
  target: any[],
  transform: (item: T, index: number) => T,
  childName: string = 'children',
) => {
  return target?.map((item, index) => {
    const data = Object.assign(item, transform(item, index));
    item[childName] && item[childName].length && arrayChange(item[childName], transform);
    return data;
  });
};
