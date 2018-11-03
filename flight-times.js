// Write a function that takes a list of flights with their departure
// and arrival time and returns the time frame for which the maximum number of
// flights are in the air.

// Flights are represented as objects as follows:
// {
//    flight: "AA102",
//    departure: 800,
//    arrival: 1400
// }

flights = [
  {
    flight: "AA102",
    departure: 800,
    arrival: 1400
  },
  {
    flight: "AA104",
    departure: 1000,
    arrival: 1800
  },
  {
    flight: "AA202",
    departure: 1230,
    arrival: 1500
  },
  {
    flight: "AA102",
    departure: 1800,
    arrival: 2100
  },
  {
    flight: "AA102",
    departure: 1100,
    arrival: 1300
  }
]

function makeTimeline(flights) {
  return flights
    .reduce((acc, current) => {
      const a = { type: "a", time: current.arrival };
      const b = { type: "d", time: current.departure };
      return [...acc, a, b];
    }, [])
    .sort((a, b) => a.time - b.time);
}

function airTime(flights) {
  const timeline = makeTimeline(flights);
  let current = 0;
  let max = 0;
  let maxIndex = 0;

  timeline.forEach((event, index) => {
    event.type === "d" ? current++ : current--;

    if (current > max) {
      max = current;
      maxIndex = index;
    }
  })

  return `The maximum is ${max} flights in the air from ${timeline[maxIndex].time} to ${timeline[maxIndex + 1].time}.`
}
