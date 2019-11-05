// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(function(i){
        return i * -1
    })
}

function mapToNoChange(sourceArray){
    return sourceArray.map(function(i){
        return i
    })
}

function mapToDouble(sourceArray){
    return sourceArray.map(function(i){
        return i * 2
    })
}

function mapToSquare(sourceArray){
    return sourceArray.map(function(i){
        return i * i
    })
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(reducer,startingPoint)
}

function reduceToAllTrue(sourceArray){
    let value = true;
  for (let i = 0; i < sourceArray.length; i++){
      if (!sourceArray[i]){
          return false
      }
  }
  return value;
}

function reduceToAnyTrue(sourceArray){
    let value = false;
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            value = true
        }
    }
    return value;
}