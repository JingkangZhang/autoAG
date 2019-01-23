function generateHomeworkText(FORM_STATE) {
  // return `from math import * \n#this \ndef a(a,b):\n    return "shit"`;
  const TAB = "    ";

  var ret = "";
  ret += FORM_STATE.starterCode;
  if (ret !== "") {
    ret += '\n\n';
  }

  for (var i = 0; i < FORM_STATE.tests.length; i++) {
    var currTest = FORM_STATE.tests[i];

    //comments
    ret += "# Q" + (i + 1) + ": ";
    var testName =
      currTest.advancedSetting.testName !== "" ?
        currTest.advancedSetting.testName
        :
        currTest.functionName;
    ret += testName;
    ret += "\n";
    if (FORM_STATE.pointsEnabled) {
      ret += "# Full score: " + currTest.advancedSetting.fullScore;
      ret += "\n";
    }
    ret += "# Type `python3 test " + testName + "` in terminal\n";
    ret += "#    to run tests on this question. \n";

    // body
    ret += "def " + currTest.functionName +
      "(" + currTest.functionParams + "):\n";

    var lv1Indent = TAB;
    lv1Indent += "'''";
    lv1Indent += currTest.description;
    lv1Indent += "\n\n";


    const MAX = 4;
    for (var j = 0; j < currTest.testCases.length; j++) {
      if (j < MAX) {
        var currCase = currTest.testCases[j];
        console.log(j);
        console.log(currTest.testCases.length);
        lv1Indent += ">>> " + currTest.functionName + "(" + currCase[0] + ")" + "\n";
        lv1Indent += currCase[1] + "\n";
      }
    }
    lv1Indent += "'''";
    lv1Indent += "\n";
    lv1Indent += currTest.advancedSetting.skeletonCode;
    lv1Indent += "\n\n"

    ret += lv1Indent.split("\n").join("\n" + TAB);
    ret = ret.slice(0, -1);
    ret += '\n';
  }
  return ret;
}

export {generateHomeworkText};
