const longgap = (t)=>{
// i think to calulate we need all in a one easy format like mili secs and store at one place to calculate 
let times = []
  for (let i = 0; i < t.length; i++) {
        times.push(new Date(t[i]).getTime())
    }
//now short it 
 times.sort(function(a, b) {
        return a - b;
    }) 
    let biggestGap = 0 

 for (let i = 1; i < times.length; i++) {
        let gap = times[i] - times[i - 1];

        if (gap > biggestGap) {
            biggestGap = gap;
        }
    }

    return biggestGap;
}

let sampledataaaaa = [
    "2026-05-01T10:00:00",
    "2026-05-01T12:30:00",
    "2026-05-02T09:00:00",
    "2026-05-01T15:00:00"
];

console.log(longgap(sampledataaaaa));