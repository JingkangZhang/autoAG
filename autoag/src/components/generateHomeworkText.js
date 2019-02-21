function generateHomeworkText(FORM_STATE) {
  // return `from math import * \n#this \ndef a(a,b):\n    return "shit"`;
  const TAB = "    ";

  var ret = "";
  ret += FORM_STATE.starterCode;
  if (ret !== "") {
    ret += '\n\n';
  }
  var questionIndex = -1;
  for (var i = 0; i < FORM_STATE.tests.length; i++) {
    var currTest = FORM_STATE.tests[i];
    var testType = currTest.advancedSetting.testType;
    if (testType !== "unit_test") {
      questionIndex++;
    }
    var testName;
    if (testType === "simple" || testType === "unit") {
      ret += "# Q" + (questionIndex + 1) + ": ";
      testName =
      currTest.advancedSetting.testName.replace(/\s/g, '') !== "" ?
      currTest.advancedSetting.testName.replace(/\s/g, '')
      :
      currTest.functionName;
      ret += testName;
      ret += "\n";
    } else {
      testName = currTest.functionName;
      if (currTest.advancedSetting.display !== "hide") {
        ret += "##### PLEASE DO NOT MODIFY THIS FUNCTION #####\n"
      }
      ret += "# Unit Test: " + testName + "\n";
    }
    if (testType === "simple" || testType === "unit_test") {
      if (FORM_STATE.pointsEnabled) {
        ret += "# Full score: " + currTest.advancedSetting.fullScore;
        ret += "\n";
      }
      ret += "# Type `python3 test " + testName + "` in terminal\n";
      ret += testType === "unit_test" ?
              "#    to run this test. \n"
              :
              "#    to run tests on this question. \n";
    }
    if (testType === "simple" ||
          testType === "unit" ||
          currTest.advancedSetting.display === "show") {
      // body
      ret += "def " + currTest.functionName +
        "(" + currTest.functionParams + "):\n";

      var lv1Indent = TAB;
      lv1Indent += "'''";
      lv1Indent += currTest.description;
      lv1Indent += "\n";

      if (testType === "simple") {
        const MAX = 4;
        lv1Indent += "\n";
        for (var j = 0; j < currTest.testCases.length; j++) {
          if (j < MAX) {
            var currCase = currTest.testCases[j];
            // console.log(j);
            // console.log(currTest.testCases.length);
            lv1Indent += ">>> " + currTest.functionName + "(" + currCase[0] + ")\n";
            lv1Indent += currCase[1] + "\n";
          }
        }
      }
      lv1Indent += "'''";
      lv1Indent += "\n";
      if (testType === "unit" || testType === "simple") {
        lv1Indent += currTest.advancedSetting.skeletonCode;
      } else if (testType === "unit_test"){
        lv1Indent += currTest.testCode;
      }
      lv1Indent += "\n\n"

      ret += lv1Indent.split("\n").join("\n" + TAB);
      ret = ret.slice(0, -1);
    } else if (currTest.advancedSetting.display === "hide") {
      ret += "# Test body hidden. \n\n"
    }
    ret += '\n';

  }
  return ret;
}

export {generateHomeworkText};
