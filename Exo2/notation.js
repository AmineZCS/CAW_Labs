function mean(scores) {
  let sum = 0
  for(let i=0;i <scores.length;i++){
    sum = sum + scores[i];
  }
  return sum/scores.length
}

exports.mean = mean;