const Icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = '/icons/thunderstorms-rain.svg'
      console.log("tormenta")
      break;
    case 'Drizzle':
      icon = '/icons/drizzle.svg'
      console.log("llovizna")
      break;
    case 'Rain':
      icon = '/icons/rain.svg'
      break;
    case 'Snow':
      icon = '/icons/snow.svg'
      break;
    case 'Clear':
      icon = '/icons/clear-day.svg'
      break;
    case 'Atmosphere':
      icon = '/icons/weather.svg'
      break;
    case 'Clouds':
      icon = '/icons/fog.svg'
      break;
    case 'Fog':
      icon = '/icons/fog.svg'
      break;
    case 'Haze':
      icon = '/icons/haze.svg'
      break;
    case 'Smoke':
      icon = '/icons/smoke.svg'
      break;
    default:
      icon = '/icons/clear-day.svg'
      break;
  }
  return icon;
}

export default Icons;