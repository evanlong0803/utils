/**
 * @description:延迟|等待函数
 * @param {Number} time 延迟时间
 * @return  Promise
 */
export const delay = (time: number | undefined): Promise<TimerHandler> =>
  new Promise((resolve) => setTimeout(resolve, time));
