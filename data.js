let humidity;
let temp;
let tempMax;
let tempMin;

let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=c434aece31b299f094dd437721ce40bd';
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
  gotData(out);
})
.catch(err => { throw err });

function gotData(data) {
    console.log('gotdata', data.main);
    humidity = data.main.pressure;
    // humidity = data.main.pressure;
    // temp = data.main.temp;
    // tempMax = data.main.temp_max;
    // tempMin = data.main.temp_min;
}

