import React from 'react';
// import logo from './logo.svg';
import Split from 'react-split';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './containers/TopNav/index';
import InputField from './containers/InputField';
import OutputField from './containers/OutputField';
import { generateHomeworkText } from './containers/generateHomeworkText.js';
import { generateTest } from './containers/generateTest.js';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }
class HomeworkEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      formState: {
        pointsEnabled: false,
        starterCode: '',
        tests: [createInitialTestData()],
      },
    };
    // this.state = {"pointsEnabled":true,"starterCode":"from math import *","tests":[{"functionName":"multiply_loop","functionParams":"a, b","description":"Return `a` multiplied with `b`. Please use a loop with \"+\". Do not use \"*\" or recursion.","testCases":[["1, 1","1"],["1, 2","2"],["2, 2","4"],["2, 3 ","6"],["9,9 ","81"],["100, 100","10000"],["5, 6","30"],["8, 9","72"],["9, 8","72"],["3, 6","18"],["5, 8","40"]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":"\"Recursion\", \"Mult\""}},{"functionName":"multiply_recursion","functionParams":"a, b","description":"Return `a` multiplied with `b`. Please use recursion with \"+\". Do not use \"*\" or any form of loops.","testCases":[["1, 1","1"],["1, 2","2"],["2, 2","4"],["2, 3 ","6"],["9,9 ","81"],["100, 100","10000"],["5, 6","30"],["8, 9","72"],["9, 8","72"],["3, 6","18"],["5, 8","40"]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":"\"While\", \"For\""}},{"functionName":"","functionParams":"","description":"","testCases":[["",""]],"advancedSetting":{"fullScore":"1","testType":"simple","testName":"","partialCredits":"none","skeletonCode":"'*** YOUR CODE HERE ***'","disallowedUse":""}}]};
  }

  componentDidMount() {
    const localFormState = window.localStorage.getItem('formState');
    if (localFormState) {
      this.setState({ formState: JSON.parse(localFormState) });
    }
  }

  handleInputChange(e) {
    const newFormState = JSON.parse(JSON.stringify(this.state.formState));
    switch (e.target.name) {
      case 'save':
        download(
          JSON.stringify(this.state.formState, null, 2),
          `MySession_at_${new Date()
            .toLocaleString()
            .replace(', ', '_')
            .replace(' ', '_')}.autoAG`,
          'text/plain',
        );
        // console.log(JSON.stringify(this.state.formState));
        // console.log(JSON.parse(JSON.stringify(this.state.formState)));
        break;
      case 'import':
        const inputElement = document.getElementById('importFile');
        const reader = new FileReader();
        reader.onload = (event) => {
          this.setState({
            formState: JSON.parse(event.target.result),
          });
        }; // desired file content
        if (inputElement.files[0]) {
          reader.readAsText(inputElement.files[0]); // you could also read images and other binaries
        }
        break;
      case 'export':
        const zip = new JSZip();
        zip
          .folder('homework')
          .file('homework.py', generateHomeworkText(this.state.formState))
          .file('test', generateTest(this.state.formState));
        zip.generateAsync({ type: 'blob' }).then((content) => {
          FileSaver.saveAs(content, 'homework.zip');
        });
        break;
      case 'helpAddSimpleQuestions':
        newFormState.tests = newFormState.tests.concat(genSimpleQuestions());
        break;
      case 'helpAddDisallowedUses':
        newFormState.tests = newFormState.tests.concat(genDisallowedUses());
        break;
      case 'helpAddUnitTests':
        newFormState.tests = newFormState.tests.concat(genUnitTests());
        break;
      case 'pointsEnabled':
        newFormState.pointsEnabled = e.target.checked;
        break;
      case 'starterCode':
        newFormState.starterCode = e.target.value;
        break;
      case 'addTest':
        newFormState.tests.push(createInitialTestData());
        break;
      case 'addUnitTest':
        newFormState.tests.push(createUnitTestTest(null));
        break;
      case 'testType':
        newFormState.tests[e.target.dataset.testid].advancedSetting.testType = e.target.value;
        if (e.target.value === 'unit') {
          newFormState.tests.splice(
            parseInt(e.target.dataset.testid) + 1,
            0,
            createUnitTestTest(newFormState.tests[e.target.dataset.testid]),
          );
        }
        break;
      case 'unitDisplay':
        newFormState.tests[e.target.dataset.testid].advancedSetting.display = e.target.value;
        break;
      case 'fullScore':
        newFormState.tests[e.target.dataset.testid].advancedSetting.fullScore = e.target.value;
        break;
      case 'functionName':
        newFormState.tests[e.target.dataset.testid].functionName = e.target.value;
        break;
      case 'functionParams':
        newFormState.tests[e.target.dataset.testid].functionParams = e.target.value;
        break;
      case 'formDescription':
        newFormState.tests[e.target.dataset.testid].description = e.target.value;
        break;
      case 'addTestCase':
        newFormState.tests[e.target.dataset.testid].testCases.push(['', '']);
        break;
      case 'addUnitTestCase':
        newFormState.tests[e.target.dataset.testid].testCases.push('');
        break;
      case 'testCaseInput':
        newFormState.tests[e.target.dataset.testid].testCases[
          e.target.dataset.testcaseid
        ][0] = e.target.value;
        break;
      case 'unitTestCaseInput':
        newFormState.tests[e.target.dataset.testid].testCases[
          e.target.dataset.testcaseid
        ] = e.target.value;
        break;
      case 'testCaseOutput':
        newFormState.tests[e.target.dataset.testid].testCases[
          e.target.dataset.testcaseid
        ][1] = e.target.value;
        break;
      case 'testName':
        newFormState.tests[e.target.dataset.testid].advancedSetting.testName = e.target.value;
        break;
      case 'partialCredits':
        newFormState.tests[
          e.target.dataset.testid
        ].advancedSetting.partialCredits = e.target.value;
        break;
      case 'skeletonCode':
        newFormState.tests[
          e.target.dataset.testid
        ].advancedSetting.skeletonCode = e.target.value;
        break;
      case 'unitTestCode':
        newFormState.tests[e.target.dataset.testid].testCode = e.target.value;
        break;
      case 'disallowedUse':
        newFormState.tests[
          e.target.dataset.testid
        ].advancedSetting.disallowedUse = e.target.value;
        break;
      case 'headerButtonUp':
        e.stopPropagation();
        if (e.target.dataset.testid != 0) {
          var temp = newFormState.tests[e.target.dataset.testid];
          newFormState.tests[e.target.dataset.testid] = newFormState.tests[e.target.dataset.testid - 1];
          newFormState.tests[e.target.dataset.testid - 1] = temp;
        }
        break;
      case 'headerButtonDown':
        e.stopPropagation();
        if (e.target.dataset.testid != newFormState.tests.length - 1) {
          var temp = newFormState.tests[e.target.dataset.testid];
          newFormState.tests[e.target.dataset.testid] = newFormState.tests[parseInt(e.target.dataset.testid) + 1];
          newFormState.tests[parseInt(e.target.dataset.testid) + 1] = temp;
          //   console.log(newFormState["tests"][e.target.dataset.testid + 1]);
        }
        break;
      case 'headerButtonDelete':
        e.stopPropagation();
        newFormState.tests.splice(e.target.dataset.testid, 1);
        break;
      case 'headerButtonDuplicate':
        e.stopPropagation();
        newFormState.tests.splice(
          parseInt(e.target.dataset.testid) + 1,
          0,
          JSON.parse(
            JSON.stringify(newFormState.tests[e.target.dataset.testid]),
          ),
        );
        break;
      case 'testCaseDelete':
        e.preventDefault();
        newFormState.tests[e.target.dataset.testid].testCases.splice(
          e.target.dataset.testcaseid,
          1,
        );
        break;
      default:
        console.log('Should go here, exiting...');
        return;
    }
    window.localStorage.setItem('formState', JSON.stringify(newFormState));
    this.setState({ formState: newFormState });
  }

  render() {
    return (
      <div>
        <TopNav
          formHandler={this.handleInputChange}
          formState={this.state.formState}
        />
        <Split className="split" sizes={[60, 40]} minSize={[350, 200]}>
          <InputField
            formState={this.state.formState}
            formHandler={this.handleInputChange}
          />
          <OutputField
            className="outputField"
            formState={this.state.formState}
          />
        </Split>
      </div>
    );
  }
}
function createInitialTestData() {
  return {
    functionName: '',
    functionParams: '',
    description: '',
    testCases: [['', '']],
    advancedSetting: {
      fullScore: '1',
      testType: 'simple',
      testName: '',
      partialCredits: 'none',
      skeletonCode: "'*** YOUR CODE HERE ***'",
      disallowedUse: '',
    },
  };
}

function createUnitTestTest(t) {
  if (t === null) {
    return {
      functionName: '',
      functionParams: '',
      description: '',
      testCases: [''],
      testCode: '',
      advancedSetting: {
        fullScore: '1',
        display: 'show',
        testType: 'unit_test',
      },
    };
  }
  return {
    functionName: `${t.functionName}_test`,
    functionParams: 'inputs, expected',
    description: `Unit test for ${t.functionName}.`,
    testCases: t.testCases.map((x) => `[${x[0]}], ${x[1]}`),
    testCode:
      `assert ${t.functionName}(*inputs) == expected, 'Output differ from expected. Current test failed.' \n`
      + 'return True',
    advancedSetting: {
      fullScore: '1',
      display: 'show',
      testType: 'unit_test',
    },
  };
}

function genSimpleQuestions() {
  return [
    {
      functionName: 'twenty_nineteen',
      functionParams: '',
      description: 'Come up with the most creative way of returning 2019.',
      testCases: [['', '2019']],
      advancedSetting: {
        fullScore: '1',
        testType: 'simple',
        testName: '',
        partialCredits: 'none',
        skeletonCode: 'return ________ #FIXME',
        disallowedUse: '',
      },
    },
    {
      functionName: 'add',
      functionParams: 'a, b',
      description: 'Return the sum of `a` and `b`.',
      testCases: [
        ['0, 0', '0'],
        ['0, 1', '1'],
        ['1, 0', '1'],
        ['1, 1', '2'],
        ['9, 8', '17'],
        ['42, 42', '84'],
        ['100, 1000', '1100'],
      ],
      advancedSetting: {
        fullScore: '1',
        testType: 'simple',
        testName: '',
        partialCredits: 'none',
        skeletonCode: "'*** YOUR CODE HERE ***'",
        disallowedUse: '',
      },
    },
    {
      functionName: 'two_sum',
      functionParams: 'nums, target',
      description:
        'Given an array of integers, return indices of the two numbers such that \nthey add up to a specific target.\n\nYou may assume that each input would have exactly one solution, and you may \nnot use the same element twice.\n\n:type nums: List[int]\n:type target: int\n:rtype: List[int]\n\nFrom LeetCode.',
      testCases: [
        ['[1, 2, 3, 4], 3', '[0, 1]'],
        ['[6, 3, 2, 4], 7', '[1, 3]'],
        ['[2, 4, 5, 3, 10, 9, 6], 11', '[3, 5]'],
        ['[12, 13, 19, 18, 15], 33', '[3, 4]'],
      ],
      advancedSetting: {
        fullScore: '1',
        testType: 'simple',
        testName: '',
        partialCredits: 'none',
        skeletonCode: "'*** YOUR CODE HERE ***'",
        disallowedUse: '',
      },
    },
  ];
}
function genDisallowedUses() {
  return [
    {
      functionName: 'gcd_recur',
      functionParams: 'a, b',
      description:
        'Return the greatest common divisor of A and B. Consider using The \nEuclidean Algorithm: If a is greater than b and a is not divisible \nby b, then: gcd(a, b) = gcd(b, a % b).\n\nPlease use a recursive solution.',
      testCases: [
        ['34, 19', '1'],
        ['25, 5', '5'],
        ['20, 30', '10'],
        ['40, 40', '40'],
        ['17, 289', '17'],
        ['60, 48', '12'],
        ['59, 27', '1'],
        ['684, 1767', '57'],
        ['5, 0', '5'],
        ['0, 5', '5'],
      ],
      advancedSetting: {
        fullScore: '1',
        testType: 'simple',
        testName: '',
        partialCredits: 'none',
        skeletonCode:
          'if ______: #FIXME\n    return a\nelse:\n    return ________ #FIXME',
        disallowedUse: '"While", "For"',
      },
    },
    {
      functionName: 'gcd_iter',
      functionParams: 'a, b',
      description:
        'Return the greatest common divisor of A and B. Consider using The \nEuclidean Algorithm: If a is greater than b and a is not divisible \nby b, then: gcd(a, b) = gcd(b, a % b).\n\nPlease use an iterative solution.',
      testCases: [
        ['34, 19', '1'],
        ['25, 5', '5'],
        ['20, 30', '10'],
        ['40, 40', '40'],
        ['17, 289', '17'],
        ['60, 48', '12'],
        ['59, 27', '1'],
        ['684, 1767', '57'],
        ['5, 0', '5'],
        ['0, 5', '5'],
      ],
      advancedSetting: {
        fullScore: '1',
        testType: 'simple',
        testName: '',
        partialCredits: 'none',
        skeletonCode:
          'while ________: #FIXME\n    a, b = ________ #FIXME\nreturn ________ #FIXME',
        disallowedUse: '"Recursion"',
      },
    },
  ];
}
function genUnitTests() {
  return [
    {
      functionName: 'pop_front',
      functionParams: 'lst',
      description: 'Remove and return the first element in LST.',
      testCases: [['', '']],
      advancedSetting: {
        fullScore: '1',
        testType: 'unit',
        testName: '',
        partialCredits: 'none',
        skeletonCode: "'*** YOUR CODE HERE ***'",
        disallowedUse: '',
      },
    },
    {
      functionName: 'pop_front_test',
      functionParams: 'lst, expected_lst, expected_ret',
      description: 'Unit test for pop_front.',
      testCases: [
        '[1, 2, 3, 4], [2, 3, 4], 1 ',
        '["Hi", "y\'all"], ["y\'all"], "Hi"',
        '[["nested!"]], [], ["nested!"]',
      ],
      testCode:
        '\n#set up error message\nerror_msg = "lst = " + lst.__repr__()\nerror_msg += "\\n Running pop_front on lst..."\n\n#run test\nret = pop_front(lst)\n\n#check return value\nif ret != expected_ret:\n    print(error_msg)\n    print("Should return", expected_ret)\n    print("Got:", ret)\n    #Return False to report to autoAG failure of current test. \n    #You could also throw an error; autoAG will catch it.\n    return False \n\n#check original list\nif lst != expected_lst:\n    print(error_msg)\n    print("lst should be", expected_lst)\n    print("Got:", lst)\n    return False\n\n#Return True to report to autoAG success of current test.\nreturn True',
      advancedSetting: {
        fullScore: '1',
        display: 'show',
        testType: 'unit_test',
      },
    },
  ];
}
// Function to download data to a file
function download(data, filename, type) {
  const file = new Blob([data], { type });
  if (window.navigator.msSaveOrOpenBlob) {
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  } else {
    // Others
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

export default HomeworkEditor;
