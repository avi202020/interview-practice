// Create a function Tower with int ‘a’ – for number of disks,
// char ‘from’ – for from peg, char ‘aux’ – for secondary peg,
// char ‘to’ – for destination peg

function tower(num, from, aux, to) {
  if (num === 1) {
    console.log(`move disk ${num} from ${from} to ${to}`);
  } else {
    tower(num - 1, from, to, aux);
    console.log(`move disk ${num} from ${from} to ${to}`);
    tower(num - 1, aux, from, to);
  }
}

tower(5, "a", "b", "c");
