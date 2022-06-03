var ipadPRO_landscape = Math.min(window.innerWidth)>1024 & Math.min(window.innerWidth)<=1366 & Math.abs(window.screen.orientation.angle === 90)
var ipad_landscape = Math.min(window.innerWidth)<=1024 & (Math.abs(window.screen.orientation.angle === 90))
var ipad_portrait = Math.min(window.innerWidth)<=1024 & (Math.abs(window.screen.orientation.angle === 0))
var laptop = Math.min(window.innerWidth) > 1024
var desktop = Math.min(window.innerWidth) > 1680
// if(ipadPRO_landscape) { console.log('ipadPRO_landscape')}
// if(ipad_landscape) { console.log('ipad_landscape')}
// if(ipad_portrait) { console.log('ipad_portrait')}
// if(laptop) { console.log('laptop')}
// if(desktop) { console.log('desktop')}

export const getData = (interval) => {
  // generate an array of random data
  var data = [],
      data1 = [],
      time = (new Date()).getTime(),
      i;

  const minutes = getNumber()
  const hours = minutes/60

  for (i = minutes; i <= 0; i += 1) {
    data.push({
      date: time + i * interval,
      value: getRandomInt(40, 140),
      category: 'heart_rate'
    })
    data.push({
      date: time + i * interval,
      value: getRandomInt(0, 20),
      category: 'heart_intensity'
    })
    data1.push({
      date: time + i * interval,
      value: getRandomInt(0, 10),
      category: 'blood_pulse'
    })
  }
  return {'heart': data, 'blood_pulse': data1, hours}
}

export const getNewData = (current, interval) => {

  let hrNew = [{
    date: (current).getTime() * interval,
    value: getRandomInt(40, 140),
    category: 'heart_rate'
  }, {
    date: (current).getTime() * interval,
    value: getRandomInt(0, 20),
    category: 'heart_intensity'
  }]

  let bpNew = [{
    date: (current).getTime() * interval,
    value: getRandomInt(0, 10),
    category: 'blood_pulse'
  }]

  return {hrNew, bpNew}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getNumber() {
  if(ipadPRO_landscape){
    return -60
  } else if(ipad_landscape){
    return -60
  } else if(ipad_portrait){
    return -30
  } else if(laptop){
    return -120
  } else if(desktop){
    return -360
  } else{
    return -120
  }
} 
