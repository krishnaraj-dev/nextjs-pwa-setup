import { formatDistance, format, parse } from "date-fns"

const objectLength = (obj) => {
  return Object.keys(obj).length
}

const stringLimit = (str = "", length = 50) => {
  if (str.length > length) {
    return str.substring(0, length) + "..."
  } else {
    return str
  }
}

const offset = (el) => {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    height: rect.height,
  }
}

const getCancellationToken = () => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  return source
}

const debounce = (callback, timeout) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, timeout)
  }
}

const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone"
  }
  if (/android/i.test(userAgent)) {
    return "Android"
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS"
  }
  return "unknown"
}

const vhToPixel = (value) => {
  return `${(window.innerHeight * value) / 100}px`
}

const vwToPixel = (value) => {
  return `${(window.innerWidth * value) / 100}px`
}

const prepareParams = (data, prefix = true, encode = true) => {
  if (data)
    return (
      (prefix ? "?" : "") +
      Object.keys(data)
        .map((key) => `${key}=${encode ? encodeURIComponent(data[key]) : data[key]}`)
        .join("&")
    )
}

const timeAgo = (data) => {
  const date = parse(data, "dd-MM-yy HH:mm", new Date())
  return formatDistance(new Date(format(date, "yyyy-MM-dd'T'HH:mm:ss")), new Date(), {
    addSuffix: true,
  }).replace("about", "")
}

export {
  objectLength,
  stringLimit,
  offset,
  getCancellationToken,
  debounce,
  getMobileOperatingSystem,
  vhToPixel,
  vwToPixel,
  prepareParams,
  timeAgo,
}
