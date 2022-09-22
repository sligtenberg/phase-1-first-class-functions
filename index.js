/*
function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function Tuesday() {
    exerciseRoutine(swimFortyLaps);
  }
  
  function Wednesday() {
    exerciseRoutine(runFiveMiles);
  }
  
  function Thursday() {
    exerciseRoutine(liftWeights);
  }
  
  function Friday() {
    exerciseRoutine(swimFortyLaps);
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }

  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }  
  
  Monday();
  Tuesday();
  Wednesday();
  Thursday()
  Friday();

  exerciseRoutine(() => {console.log("Stretch, work that core!")});
  */

  function receivesAFunction(theFunction) {
    theFunction();
  }

  function returnsANamedFunction() {
    return receivesAFunction;
  }

  function returnsAnAnonymousFunction() {
    return function (){};
  }