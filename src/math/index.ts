/**
 * 数字相加
 * @param {Number | BigInt} ags - 数字，可以传递任意数量的数字
 * @returns total - 任意数量的数字相加之后的总和
 * @example
 * addUp(1, 2) // 3
 * addUp(1, 2, 3, 4, 5) // 15
 * // 对于绝对值大于或等于 2^53 的数值，依然可以支持
 * // 要求实参必须为 BigInt 类型
 * addUp(11111111111111111n, 11111111111111111n)
 */
export const addUp = (...ags: (number | BigInt)[]) => {
  const initialValue = 0;
  const sumWithInitial = ags.reduce((previousValue, currentValue) => {
    const regulation = Number.MAX_SAFE_INTEGER; // 等同于Math.pow(2, 53) - 1
    if (previousValue > regulation || currentValue > regulation) {
      return BigInt(previousValue.toString()) + BigInt(currentValue.toString());
    }
    return (previousValue as number) + (currentValue as number);
  }, initialValue);
  return sumWithInitial;
};
