function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}




function clocks() {

  const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
  console.log(laDate);

  const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
  console.log(berlinDate);

  let cityTimeZones = {
    'New York': 'America/New_York',
    'Chicago': 'America/Chicago',
    'Denver': 'America/Denver',
    'San Francisco': 'America/Los_Angeles',
    'Anchorage': 'America/Anchorage',
    'Honolulu': 'Pacific/Honolulu'
  }

  let allClocks = document.querySelectorAll('.clock');

  for (i = 0; i < allClocks.length; i++) {
    let clock = allClocks[i];
    let city = clock.getAttribute('data-city');
    let tz = cityTimeZones[city];

    let hour = htmlToElement('<div class="hour"></div>');
    let minute = htmlToElement('<div class="minute"></div>');
    let second = htmlToElement('<div class="second"></div>');
    let cityDisplay = htmlToElement('<div class="clock-city">' + city + '</div>');
    clock.appendChild(hour);
    clock.appendChild(minute);
    clock.appendChild(second);
    clock.after(cityDisplay);

    setInterval(function() {
      d = new Date(); //object of date()
      d = changeTimeZone(d, tz);
      hr = d.getHours();
      min = d.getMinutes();
      sec = d.getSeconds();
      hr_rotation = 30 * hr + min / 2; //converting current time
      min_rotation = 6 * min;
      sec_rotation = 6 * sec;

      hour.style.transform = `rotate(${hr_rotation}deg)`;
      minute.style.transform = `rotate(${min_rotation}deg)`;
      second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000); 
  }

  

}


