const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const toThousands = num =>{
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

module.exports = {
  formatTime: formatTime,
  toThousands: toThousands
}
