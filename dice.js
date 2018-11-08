// Greed is a dice game played with five six-sided dice. Your mission, should you
// choose to accept it, is to score a throw according to these rules. You will
// always be given an array with five six-sided dice values.
//
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
//
// A single die can only be counted once in each roll. For example, a "5" can only
// count as part of a triplet (contributing to the 500 points) or as a single 50 points,
// but not both in the same roll.
//
// Example scoring
//
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

function score(dice) {
  const counted = {};
  let score = 0;
  let sorted = dice.sort((a, b) => a - b);

  sorted.forEach((roll, idx) => {
    if (!counted[idx]) {
      if (roll === dice[idx + 1] && roll === dice[idx + 2] && !counted[idx + 1] && !counted[idx + 2]) {
        counted[idx + 1] = true;
        counted[idx + 2] = true;

        switch(roll) {
          case 1:
          score += 1000;
          break;

          case 2:
          score += 200;
          break;

          case 3:
          score += 300;
          break;

          case 4:
          score += 400;
          break;

          case 5:
          score += 500;
          break;

          case 6:
          score += 600;
          break;

          default:
          break;
        }
      } else {
        if (roll === 1) {
          score += 100;
        } else if (roll === 5) {
          score += 50;
        }
      }
      counted[idx] = true;
    }
  })
  return score;
}

console.log(score( [2, 4, 4, 5, 4] ))
