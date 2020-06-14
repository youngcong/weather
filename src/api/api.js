export const getBasicInfo = (params) => {
  return fetch(`https://free-api.heweather.net/s6/weather/now?location=${params.location}&key=890a9e63294941fa88ad6351dea75c45`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return {
        location: json.HeWeather6[0].basic.location,
        cond_txt: json.HeWeather6[0].now.cond_txt,
        tmp: json.HeWeather6[0].now.tmp
      }
    })
}

export const getDailyForecast = (params) => {
  return fetch(`https://free-api.heweather.net/s6/weather/forecast?location=${params.location}&key=890a9e63294941fa88ad6351dea75c45`)
    .then(response => response.json())
    .then(json => {
      let ret = []
      json.HeWeather6[0].daily_forecast.forEach(info => {
        ret.push({
          date: getDay(info.date),
          imgSrc: getImageSrc(info),
          cond_txt_d: info.cond_txt_d,
          tmp_max: info.tmp_max,
          tmp_min: info.tmp_min
        })
      })
      return ret
    })
}

function getImageSrc(info) {
  return `https://cdn.heweather.com/cond_icon/${info.cond_code_d}.png`
}

function getDay(date) {
  const weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  const formattedDate = new Date(Date.parse(date))
  return weekDay[formattedDate.getDay()]
}