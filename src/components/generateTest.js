// Below string is generated with
// $ python3
// >>> open('autograder_script/test.py').read().__str__()
const testPy = '#Below commented code will be inserted to the final autograder file by JavaScript\n#d = eval(autoAG.json)\n#def unit_f_name_test(): # in case of unit tests.\n#  ...\nfrom ast import parse, NodeVisitor, Name\nimport traceback\n_NAMES = {\n    \'Add\': \'+\',\n    \'And\': \'and\',\n    \'Assert\': \'assert\',\n    \'Assign\': \'=\',\n    \'AugAssign\': \'op=\',\n    \'BitAnd\': \'&\',\n    \'BitOr\': \'|\',\n    \'BitXor\': \'^\',\n    \'Break\': \'break\',\n    \'Recursion\': \'recursive call\',\n    \'ClassDef\': \'class\',\n    \'Continue\': \'continue\',\n    \'Del\': \'del\',\n    \'Delete\': \'delete\',\n    \'Dict\': \'{...}\',\n    \'DictComp\': \'{...}\',\n    \'Div\': \'/\',\n    \'Ellipsis\': \'...\',\n    \'Eq\': \'==\',\n    \'ExceptHandler\': \'except\',\n    \'ExtSlice\': \'[::]\',\n    \'FloorDiv\': \'//\',\n    \'For\': \'for\',\n    \'FunctionDef\': \'def\',\n    \'GeneratorExp\': \'(... for ...)\',\n    \'Global\': \'global\',\n    \'Gt\': \'>\',\n    \'GtE\': \'>=\',\n    \'If\': \'if\',\n    \'IfExp\': \'...if...else...\',\n    \'Import\': \'import\',\n    \'ImportFrom\': \'from ... import ...\',\n    \'In\': \'in\',\n    \'Index\': \'...[...]\',\n    \'Invert\': \'~\',\n    \'Is\': \'is\',\n    \'IsNot\': \'is not \',\n    \'LShift\': \'<<\',\n    \'Lambda\': \'lambda\',\n    \'List\': \'[...]\',\n    \'ListComp\': \'[...for...]\',\n    \'Lt\': \'<\',\n    \'LtE\': \'<=\',\n    \'Mod\': \'%\',\n    \'Mult\': \'*\',\n    \'Nonlocal\': \'nonlocal\',\n    \'Not\': \'not\',\n    \'NotEq\': \'!=\',\n    \'NotIn\': \'not in\',\n    \'Or\': \'or\',\n    \'Pass\': \'pass\',\n    \'Pow\': \'**\',\n    \'RShift\': \'>>\',\n    \'Raise\': \'raise\',\n    \'Return\': \'return\',\n    \'Set\': \'{ ... } (set)\',\n    \'SetComp\': \'{ ... for ... } (set)\',\n    \'Slice\': \'[ : ]\',\n    \'Starred\': \'\',\n    \'Sub\': \'-\',\n    \'Subscript\': \'[]\',\n    \'Try\': \'try\',\n    \'Tuple\': \'(... , ... )\',\n    \'UAdd\': \'+\',\n    \'USub\': \'-\',\n    \'While\': \'while\',\n    \'With\': \'with\',\n    \'Yield\': \'yield\',\n    \'YieldFrom\': \'yield from\',\n}\ndef check(source_file, checked_funcs, disallow, source=None):\n    """Checks that AST nodes whose type names are present in DISALLOW\n    (an object supporting \'in\') are not present in the function(s) named\n    CHECKED_FUNCS in SOURCE.  By default, SOURCE is the contents of the\n    file SOURCE_FILE.  CHECKED_FUNCS is either a string (indicating a single\n    name) or an object of some other type that supports \'in\'. CHECKED_FUNCS\n    may contain __main__ to indicate an entire  module. Prints reports of\n    each prohibited node and returns True iff none are found.\n    See ast.__dir__() for AST type names.  The special node name \'Recursion\'\n    checks for overtly recursive calls (i.e., calls of the form NAME(...) where\n    NAME is an enclosing def."""\n    return ExclusionChecker(disallow).check(source_file, checked_funcs, source)\nclass ExclusionChecker(NodeVisitor):\n    """An AST visitor that checks that certain constructs are excluded from\n    parts of a program.  ExclusionChecker(EXC) checks that AST node types\n    whose names are in the sequence or set EXC are not present.  Its check\n    method visits nodes in a given function of a source file checking that the\n    indicated node types are not used."""\n\n    def __init__(self, disallow=()):\n        """DISALLOW is the initial default list of disallowed\n        node-type names."""\n        self._disallow = set(disallow)\n        self._checking = False\n        self._errs = 0\n\n    def generic_visit(self, node):\n        if self._checking and type(node).__name__ in self._disallow:\n            self._report(node)\n        super().generic_visit(node)\n\n    def visit_Module(self, node):\n        if "__main__" in self._checked_funcs:\n            self._checking = True\n            self._checked_name = self._source_file\n        super().generic_visit(node)\n\n    def visit_Call(self, node):\n        if \'Recursion\' in self._disallow and \\\n           type(node.func) is Name and \\\n           node.func.id in self._func_nest:\n            self._report(node, "should not be recursive")\n        self.generic_visit(node)\n\n    def visit_FunctionDef(self, node):\n        self._func_nest.append(node.name)\n        if self._checking:\n            self.generic_visit(node)\n        elif node.name in self._checked_funcs:\n            self._checked_name = "Function " + node.name\n            checking0 = self._checking\n            self._checking = True\n            super().generic_visit(node)\n            self._checking = checking0\n        self._func_nest.pop()\n\n    def _report(self, node, msg=None):\n        node_name = _NAMES.get(type(node).__name__, type(node).__name__)\n        if msg is None:\n            msg = "should not contain \'{}\'".format(node_name)\n        print("{} {}".format(self._checked_name, msg))\n        self._errs += 1\n\n    def errors(self):\n        """Returns the number of number of prohibited constructs found in\n        the last call to check."""\n        return self._errs\n\n    def check(self, source_file, checked_funcs, disallow=None, source=None):\n        """Checks that AST nodes whose type names are present in DISALLOW\n        (an object supporting the contains test) are not present in\n        the function(s) named CHECKED_FUNCS in SOURCE.  By default, SOURCE\n        is the contents of the file SOURCE_FILE.  DISALLOW defaults to the\n        argument given to the constructor (and resets that value if it is\n        present).  CHECKED_FUNCS is either a string (indicating a single\n        name) or an object of some other type that supports \'in\'.\n        CHECKED_FUNCS may contain __main__ to indicate an entire module.\n        Prints reports of each prohibited node and returns True iff none\n        are found.\n        See ast.__dir__() for AST type names.  The special node name\n        \'Recursion\' checks for overtly recursive calls (i.e., calls of the\n        form NAME(...) where NAME is an enclosing def."""\n\n        self._checking = False\n        self._source_file = source_file\n        self._func_nest = []\n        if type(checked_funcs) is str:\n            self._checked_funcs = { checked_funcs }\n        else:\n            self._checked_funcs = set(checked_funcs)\n        if disallow is not None:\n            self._disallow = set(disallow)\n        if source is None:\n            with open(source_file, \'r\', errors=\'ignore\') as inp:\n                source = inp.read()\n        p = parse(source, source_file)\n        self._errs = 0\n\n        self.visit(p)\n        return self._errs == 0\n\n\nimport homework\nimport sys\nimport io\nprint("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")\n\nclass Test:\n    def assertEqual(self, a, b):\n        return a==b\n\n    def __init__(self, question):\n        self.question = question\n        self.tests_passed = 0\n        self.test_type = question["advancedSetting"]["testType"]\n\n    def test(self, suppress=False):\n        if suppress:\n            # create a text trap and redirect stdout\n            text_trap = io.StringIO()\n            sys.stdout = text_trap\n        print("---------------------------------------------------------------------\\n")\n        if self.test_type == "simple":\n            print("Testing {}:\\n".format(self.question[\'functionName\'] if self.question[\'advancedSetting\'][\'testName\'].strip() == "" else self.question[\'advancedSetting\'][\'testName\']))\n        elif self.test_type == "unit_test":\n            print("Running Unit Test \'{}\'".format(self.question[\'functionName\']))\n\n        for testCase in self.question[\'testCases\']:\n            if not self.test_one_pair(testCase):\n                print("{} test(s) passed before encountering the first failed case.".format(self.tests_passed))\n                print("\\n---------------------------------------------------------------------")\n\n                sys.stdout = sys.__stdout__\n                return (False, 0)\n        if self.test_type == "simple":\n            comma = "," if self.question[\'advancedSetting\'][\'disallowedUse\'] else ""\n            disallowedUse = eval("(" + self.question[\'advancedSetting\'][\'disallowedUse\'] + comma + ")")\n            if disallowedUse:\n                if (not check("homework.py", self.question[\'functionName\'], disallowedUse)):\n                    print("Please revise your code and remove these usages.")\n                    print("\\n---------------------------------------------------------------------")\n\n                    sys.stdout = sys.__stdout__\n                    return (False, 0)\n        print("All {} cases passed. No cases failed.".format(len(self.question[\'testCases\'])))\n        print("\\n---------------------------------------------------------------------")\n\n        sys.stdout = sys.__stdout__\n        return (True, int(self.question["advancedSetting"]["fullScore"]))\n\n    def test_one_pair(self, testCase):\n        if self.test_type == "simple":\n            try:\n                expected = eval(testCase[1])\n            except:\n                print("It\'s not you; it\s us! \\n" +\n                    "There\'s an error in the test case: cannot evaluate \'" + testCase[1] + "\'\\n" +\n                    "Please contact your teacher. \\n")\n                return False\n            funcCallRepr = self.question["functionName"] + "(" + testCase[0] + ")"\n            try:\n                answer = eval("homework." + self.question["functionName"] + "(" + testCase[0] + ")")\n            except Exception as ex:\n                print("Running {}:\\n".format(funcCallRepr))\n                print(traceback.format_exc())\n                print("Current test terminated.\\n")\n                return False\n\n            if self.assertEqual(answer, expected):\n                self.tests_passed += 1\n                return True\n            else:\n                print("Running {}:".format(funcCallRepr))\n                print("Expected: {}\\nGot: {}\\n".format(expected.__repr__(), answer.__repr__()))\n                return False\n        else:\n            if self.question["advancedSetting"]["display"] == "show":\n                f = "homework." + self.question["functionName"]\n            else:\n                f = "unit_" + self.question["functionName"]\n            try:\n                return eval(f + "("+ testCase + ")")\n            except:\n                print(traceback.format_exc())\n                print("Current test terminated.\\n")\n                return False\n\n\n# questionNames = [ question[\'functionName\'] if question[\'advancedSetting\'][\'testName\'].strip() == "" else question[\'advancedSetting\'][\'testName\'] for question in d["tests"]]\nquestionD = {question[\'functionName\']\n    if question["advancedSetting"]["testType"] == "unit_test" or question[\'advancedSetting\'][\'testName\'].strip() == ""\n    else question[\'advancedSetting\'][\'testName\']\n    :\n    Test(question)\n    for question in d["tests"]  #d is the autoAG file content (a dictionary). Open a file to see it\'s structure\n    if question["advancedSetting"]["testType"] != "unit"\n    }\nif len(sys.argv) > 1:\n    assert sys.argv[1] in questionD, "\\nThe command line argument you passed in is not a valid function name; choose from {}\\n".format(list(questionD.keys()).__repr__())\n    questionD[sys.argv[1]].test()\nelse:\n    result = [t.test(suppress=False) for t in questionD.values()]\n\n    passed = str(sum([1 for x in result if x[0]]))\n    score = str(sum([x[1] for x in result]))\n    print("Ran:", len(result), "tests")\n    print("Passed:", passed)\n    if d["pointsEnabled"]:\n        print("Total score: " + score + "/" + str(sum([int(t["advancedSetting"]["fullScore"]) for t in d["tests"] if t["advancedSetting"]["testType"] != "unit"])))\nprint("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")\n';

function generateTest(FORM_STATE) {
  let unitTestFunctions = '';
  const TAB = '    ';
  for (const q of FORM_STATE.tests) {
    if (q.advancedSetting.testType === 'unit_test'
          && q.advancedSetting.display === 'hide') {
      unitTestFunctions += `def unit_${q.functionName
      }(${q.functionParams}):\n`;
      let lv1Indent = TAB;
      lv1Indent += q.testCode;
      lv1Indent += '\n\n';
      unitTestFunctions += lv1Indent.split('\n').join(`\n${TAB}`);
      unitTestFunctions = unitTestFunctions.slice(0, -1);
    }
  }
  return `#!/usr/bin/env python3\n${unitTestFunctions}\ntrue = True \nfalse = False\n`
    + `d = eval("${
      JSON.stringify(FORM_STATE).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"')
    }")\n${testPy}`;
}

export { generateTest };
