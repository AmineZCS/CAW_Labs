function mean(scores) {
  // if scores is empty or not an array or not an array of numbers
  if(scores.length === 0 || !Array.isArray(scores) || scores.some((score) => isNaN(score))){
    return 0
  }
  let sum = 0
  for(let i=0;i <scores.length;i++){
    sum = sum + scores[i];
  }
  return sum/scores.length
}

exports.mean = mean;