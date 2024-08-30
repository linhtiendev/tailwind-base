export const formatNumber = (num?: number) => {
  return num ? num.toLocaleString('vi-VN') : 0
}
