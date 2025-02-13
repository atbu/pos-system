"use client"

import React, {useState, useEffect} from 'react'

// Calculates the correctly formatted displayable time.
function timeToDisplay(orderCreated: Date) {
  /*
  Takes the time that the order was created in DateTime form, converts it into a string,
  then uses Date.parse() to convert it into Unix form (number of milliseconds elapsed
  since 0000 on 1st January 1970.). It then divides the data by 1000 and floors (mathematically
  truncates) this number so that the milliseconds are removed, since they aren't relevant in this
  use case. The number is now the amount of seconds that have elapsed since 0000 on 1st January 1970.

  The current date/time (the current number of milliseconds since 0000 on
  1st January 1970, divided by 1000 and floored) is calculated, and the
  Unix time of the order creation is subtracted to find the difference.

  The number of minutes is calculated from this, and the number of seconds is also separately
  calculated so they can be displayed.
  
  The number of hours is calculated separately - if the number of hours is greater than 1,
  '> 1hr' is simply displayed since this is unlikely to occur in the first place, and the user
  can simply hover over the time to find when it was actually created in this case anyway.
  */
  const orderCreatedAsUnix = Math.floor(Date.parse(orderCreated.toString()) / 1000);
  const secondsSince = Math.floor(Date.now() / 1000) - orderCreatedAsUnix;

  const m = Math.floor(secondsSince % 3600 / 60).toString().padStart(2,'0')
  const s = Math.floor(secondsSince % 60).toString().padStart(2,'0');
  
  const h = secondsSince / 60 / 24

  if (h > 1) {
      return "> 1hr"
  } else {
      return m + ':' + s;
  }
}

const KDSTimer = ( { createdAt } ) => {
  // Uses React's useState functionality to store the time to display.
  const [time, setTime] = useState(timeToDisplay(createdAt))

  // Refreshes the timeToDisplay every second.
  useEffect(() => {
    const interval = setInterval(() => setTime(timeToDisplay(createdAt)), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Returns the time to display as a HTML element.
  return (
    <div>
      {time}
    </div>
  )
}

export default KDSTimer