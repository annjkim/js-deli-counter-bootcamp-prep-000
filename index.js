var katzDeli = [];

function takeANumber(katzDeli){
  var number = [];
 katzDeli.push(`${number}`)
 return (`You are number ${katzDeli.length} in line.`)
}

function nowServing(n){
  if (n.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var number = ++
    
    return (`Currently serving ${number}.`)
  }
}

function currentLine(katzDeliLine) {
  var newLine = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
    }
  for (var i = 0; i < katzDeliLine.length; i++) {
     newLine.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently:" + newLine;
}