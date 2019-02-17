import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Split from 'react-split'
import TopNav from './components/TopNav';
import InputField from './components/InputField';
import OutputField from './components/OutputField';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import {generateHomeworkText} from './components/generateHomeworkText.js';
import {generateTest} from './components/generateTest.js';

import {
  Container, Row, Col,
} from 'reactstrap';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      formState:{
        pointsEnabled: false,
        starterCode: "",
        tests: [
          createInitialTestData()
        ]
      },
    };
    // this.state = {"pointsEnabled":true,"starterCode":"from math import *","tests":[{"functionName":"multiply_loop","functionParams":"a, b","description":"Return `a` multiplied with `b`. Please use a loop with \"+\". Do not use \"*\" or recursion.","testCases":[["1, 1","1"],["1, 2","2"],["2, 2","4"],["2, 3 ","6"],["9,9 ","81"],["100, 100","10000"],["5, 6","30"],["8, 9","72"],["9, 8","72"],["3, 6","18"],["5, 8","40"]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":"\"Recursion\", \"Mult\""}},{"functionName":"multiply_recursion","functionParams":"a, b","description":"Return `a` multiplied with `b`. Please use recursion with \"+\". Do not use \"*\" or any form of loops.","testCases":[["1, 1","1"],["1, 2","2"],["2, 2","4"],["2, 3 ","6"],["9,9 ","81"],["100, 100","10000"],["5, 6","30"],["8, 9","72"],["9, 8","72"],["3, 6","18"],["5, 8","40"]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":"\"While\", \"For\""}},{"functionName":"","functionParams":"","description":"","testCases":[["",""]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":""}}]};
  }

  handleInputChange(e) {
    var newFormState = this.state.formState;
    switch(e.target.name) {
      case "save":
        download(
          JSON.stringify(this.state.formState, null, 2),
          "MySession_at_" + new Date().toLocaleString().
            replace(", ", "_").replace(" ", "_")
              + ".autoAG", 'text/plain'
        );
        // console.log(JSON.stringify(this.state.formState));
        // console.log(JSON.parse(JSON.stringify(this.state.formState)));
        break;
      case "import":
        const inputElement = document.getElementById("importFile");
        const reader = new FileReader();
        reader.onload = (event) => {

          this.setState({formState: JSON.parse(event.target.result)});

        } // desired file content
        if (inputElement.files[0]) {
          reader.readAsText(inputElement.files[0]) // you could also read images and other binaries
        }
        break;
      case "export":
        let zip = new JSZip();
        zip.folder("homework").file("homework.py", generateHomeworkText(this.state.formState)).file("test", generateTest(this.state.formState));
        zip.generateAsync({type: "blob"}).then(function(content) {
          FileSaver.saveAs(content, "homework.zip");
        });
        break;
      case "pointsEnabled":
        newFormState["pointsEnabled"] = e.target.checked;
        break;
      case "starterCode":
        newFormState["starterCode"] = e.target.value;
        break;
      case "addTest":
        newFormState["tests"].push(createInitialTestData());
        break;
      case "addUnitTest":
        newFormState["tests"].push(createUnitTestTest());
        break;
      case "testType":
        newFormState["tests"][e.target.dataset.testid].advancedSetting
            .testType = e.target.value;
        break;
      case "fullScore":
        newFormState["tests"][e.target.dataset.testid].advancedSetting
            .fullScore = e.target.value;
        break;
      case "functionName":
        newFormState["tests"][e.target.dataset.testid]
            .functionName = e.target.value;
        break;
      case "functionParams":
        newFormState["tests"][e.target.dataset.testid]
            .functionParams = e.target.value;
        break;
      case "formDescription":
        newFormState["tests"][e.target.dataset.testid]
            .description = e.target.value;
        break;
      case "addTestCase":
        newFormState["tests"][e.target.dataset.testid]
            .testCases.push(["",""]);
        break;
      case "addUnitTestCase":
        newFormState["tests"][e.target.dataset.testid]
            .testCases.push("");
        break;
      case "testCaseInput":
        newFormState["tests"][e.target.dataset.testid]
            .testCases[e.target.dataset.testcaseid][0] = e.target.value;
        break;
      case "unitTestCaseInput":
        newFormState["tests"][e.target.dataset.testid]
            .testCases[e.target.dataset.testcaseid] = e.target.value;
        break;
      case "testCaseOutput":
        newFormState["tests"][e.target.dataset.testid]
            .testCases[e.target.dataset.testcaseid][1] = e.target.value;
        break;
      case "testName":
        newFormState["tests"][e.target.dataset.testid]
            .advancedSetting.testName = e.target.value;
        break;
      case "partialCredits":
        newFormState["tests"][e.target.dataset.testid]
            .advancedSetting.partialCredits = e.target.value;
        break;
      case "skeletonCode":
        newFormState["tests"][e.target.dataset.testid]
            .advancedSetting.skeletonCode = e.target.value;
        break;
      case "disallowedUse":
        newFormState["tests"][e.target.dataset.testid]
            .advancedSetting.disallowedUse = e.target.value;
        break;
      case "headerButtonUp":
        e.stopPropagation();
        if (e.target.dataset.testid != 0) {
          var temp = newFormState["tests"][e.target.dataset.testid];
          newFormState["tests"][e.target.dataset.testid] =
            newFormState["tests"][e.target.dataset.testid - 1];
          newFormState["tests"][e.target.dataset.testid - 1] = temp;
        }
        break;
      case "headerButtonDown":
        e.stopPropagation();
        if (e.target.dataset.testid != (newFormState["tests"].length - 1)) {
          var temp = newFormState["tests"][e.target.dataset.testid];
          newFormState["tests"][e.target.dataset.testid] =
            newFormState["tests"][parseInt(e.target.dataset.testid) + 1];
          newFormState["tests"][parseInt(e.target.dataset.testid) + 1] = temp;
        //   console.log(newFormState["tests"][e.target.dataset.testid + 1]);
        }
        break;
      case "headerButtonDelete":
        e.stopPropagation();
        newFormState["tests"].splice(e.target.dataset.testid,1);
        break;
      case "headerButtonDuplicate":
        e.stopPropagation();
        newFormState["tests"].splice(
          parseInt(e.target.dataset.testid) + 1,
          0,
          JSON.parse(JSON.stringify(
            newFormState["tests"][e.target.dataset.testid]
          ))
        );
        break;
      case "testCaseDelete":
      e.preventDefault();
        newFormState["tests"][e.target.dataset.testid].testCases.splice(
          e.target.dataset.testcaseid,
          1
        );
        break;
      default:
        console.log("Should go here, exiting...");
        return;
    }
    this.setState({formState: newFormState});
  }
  render() {
    return (
      <div>
        <TopNav
          formHandler={this.handleInputChange}
          />
        <Split
          className="split"
          sizes={[60, 40]}
          minSize={[350, 200]}
          >
            <InputField formState={this.state.formState}
                formHandler={this.handleInputChange}/>
            <OutputField
              className="outputField"
              formState={this.state.formState}/>
        </Split>
      </div>
    );
  }
}
function createInitialTestData() {
  return {
    functionName: "",
    functionParams: "",
    description: "",
    testCases: [["", ""]],
    advancedSetting: {
      fullScore: "1",
      testType: "simple",
      testName: "",
      partialCredits: "none",
      skeletonCode: "'*** YOUR CODE HERE ***'",
      disallowedUse: "",
    }
  };
}

function createUnitTestTest() {
  return {
    functionName: "list_pop_test",
    functionParams: "setup, inputs, expected",
    description: "Unit test for list_pop. \n1. Creates a list object lst from setup['originalList']\n 2. Calls pop_list on the lst object (pop_list(lst, *inputs))\n 3.Checks if the resulting list is desired. (lst == expected)",
    testCases: ["{'originalList': [1,2,3,4]}, [0], [2,3,4]}"],
    advancedSetting: {
      fullScore: "1",
      testType: "unit_test",
      skeletonCode: "",
    }
  }
}
// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}



export default App;
