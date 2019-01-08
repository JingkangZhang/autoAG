function isValidArgList(functionParams, args) {
  var minNumOfArgs;
  var maxNumOfArgs;
  functionParams = functionParams.replace(/,\s*$/,"");  //remove trailing comma
  var functionParamsList = functionParams.split(/,/);
  var numEqSigns = 0;
  var starPresents = false;
  var numRegular = 0;
  for (var param of functionParamsList) {
    param = param.replace(/^\s*/, "");
    param = param.replace(/\s*$/, "");
    if (param.match(/\=/)) {
      numEqSigns += 1;
    } else if (param.match(/\*/)) {
      starPresents = true;
      // console.log(param);
    } else {
      numRegular += 1;
    }
  }
  // console.log("numEqSigns : ",numEqSigns, "numRegular : ",numRegular,  "starPresents : ", starPresents);
  if (functionParams.match(/^\s*$/)) {
    maxNumOfArgs = 0;
    minNumOfArgs = 0;
    numRegular = 0;
  } else {
    minNumOfArgs = numRegular;
    // console.log("here", starPresents);
    maxNumOfArgs = starPresents ? 666666 : numEqSigns + numRegular;
  }
  // Original Regex is as follows ({2,3} to be replaced by minNumOfArgs-1 and maxNumOfArgs-1)
  // /^(\s*(?:'[^']*?'|"[^"]*?"|\[[^\]]*?\]|\([^)]*?\)|[^,]+\([^)]*?\)|[^,]+),\s*){1,2}(\s*(?:'[^']*?'|"[^"]*?"|\[[^\]]*?\]|\([^)]*?\)|[^,]+\([^)]*?\)|[^, ][^,]*),?\s*)$/
  // var reLeft = "^(\\s*(?:'[^']*?'|\"[^\"]*?\"|\\[[^\\]]*?\\]|\\([^)]*?\\)|[^,]+\\([^)]*?\\)|[^,]+),\\s*)";
  // var reRight = "(\\s*(?:'[^']*?'|\"[^\"]*?\"|\\[[^\\]]*?\\]|\\([^)]*?\\)|[^,]+\\([^)]*?\\)|[^, ][^,]*),?\\s*)$";
  // var reMiddle = "{" + (minNumOfArgs - 1) + "," + (maxNumOfArgs === "" ? "" : maxNumOfArgs - 1) + "}"
  // console.log(reLeft + reMiddle + reRight);
  // var re = RegExp(reLeft + reMiddle + reRight,"g");
  // var result = functionParams.match(/^\s*$/) ?
  //     args.match(/^\s*$/) : args.match(re);
  var numArgs = check(args); //{count:Int, error:Bool} count is never 0, because it's used to indicate the number of argument the user is typing
  // console.log(minNumOfArgs);
  var realCount = args.match(/^\s*$/) ? 0 : numArgs.count;
  var result =
    (realCount >= minNumOfArgs
      && realCount <= maxNumOfArgs && !numArgs.error);

  console.log({result: Boolean(result),
    numRegular: numRegular,
    numEqSigns: numEqSigns,
    starPresents:starPresents,
    error:numArgs.error,
    count:numArgs.count
    });
  return {result: Boolean(result),
    numRegular: numRegular,
    numEqSigns: numEqSigns,
    starPresents:starPresents,
    error:numArgs.error,
    count:numArgs.count,
    realCount:realCount
    };
}

function check(f) {
  f = f.replace(/^\s*,/, "");
  f = f.replace(/,\s*$/, "");
  var count = 1;
  var symbols = ["(", "[", "'", '"'];
  var stack = [];
  for (var i = 0; i < f.length; i++) {
    var c = f.charAt(i);
    if (c==="'" || c==='"') {
      if (stack.length != 0 && stack[stack.length] === c) {
        stack.splice(stack.length, 1);
      }
      else{
        stack.push(c);
      }
    }
    else if (c === "," && stack.length == 0) {
      count += 1;
    }
    else if (c === "(" || c === "[") {
      stack.push(c);
    }
    else if (c === ")") {
      if (stack.length!=0 && stack[stack.length]==="(") {
        stack.splice(stack.length, 1);
      }
      else {
        return {count:count, error:true};
      }
    }
    else if (c === "]") {
      if (stack.length!=0 && stack[stack.length]==="[") {
        stack.splice(stack.length, 1);
      }
      else {
        return {count:count, error:true};
      }
    }
  }
  if (stack.length != 0) {
    return {count:count, error:true};
  }
  return {count:count, error:false};
}

export {isValidArgList};
