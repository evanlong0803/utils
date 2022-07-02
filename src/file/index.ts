/**
 * 将base64转换为文件对象
 * @param {String} base64Data - base64
 * @param {String} filename - 文件名
 * @returns {File | Error} File - 扁平化的新数组
 */
export const base64ToFile = (
  base64Data: string,
  filename: string
): File | Error => {
  if (typeof base64Data !== 'string') {
    return new Error('base64Data must be a string');
  }
  const arr: any[] = base64Data.split(',');
  const type = arr[0].match(/:(.*?);/)[1];
  const extension = type.split('/')[1];
  const bstr = atob(arr[1]);
  let len = bstr.length;
  const u8arr = new Uint8Array(len);
  while (len--) {
    u8arr[len] = bstr.charCodeAt(len);
  }
  return new File([u8arr], `${filename}.${extension}`, { type });
};
