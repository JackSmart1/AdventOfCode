const day6 = () => {
  interface race {
    speed: number;
    time: number;
    distance: number;
    waysToWin: number;
  }
  const task1Input = `Time:        53     89     76     98
  Distance:   313   1090   1214   1201`;

  const task2Input = `Time:        53     89     76     98
  Distance:   313   1090   1214   1201`

  const calculateWaysToWin = (race: race): race => {
    while(race.speed <= race.time){
        race.speed ++
        if(race.speed * (race.time - race.speed) > race.distance){
            race.waysToWin++
        }
    }
  return race;
};

  const task1 = (input: string) => {
    const split = input.split("\n").map((a) =>
      a
        .slice(a.indexOf(":") + 1)
        .trim()
        .split(" ")
        .filter((a) => a)
    );

    let times = split[0];
    let ditances = split[1];
    let races: race[] = times.map((t, index) => {
      return {
        speed: 0,
        time: Number(t),
        distance: Number(ditances[index]),
        waysToWin: 0,
      };
    });
    return races.map((race) => calculateWaysToWin(race)).reduce((a,b) => a * b.waysToWin, 1);
  };

  const task2 = input => {
    const split = input.split('\n').map((line) => 
        Number(line.slice(line.indexOf(':') +1 ).replaceAll(' ',''))
    )
    const race : race = {
        speed:0,
        time: split[0],
        distance: split[1],
        waysToWin:0
    }

    return calculateWaysToWin(race).waysToWin
  }
  console.log(`Task 1 - ${task1(task1Input)}`)

  console.log(`Task 2 - ${task2(task2Input)}`)

};

day6();
