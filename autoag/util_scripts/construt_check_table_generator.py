NAMES = {
    'Add': '+',
    'And': 'and',
    'Assert': 'assert',
    'Assign': '=',
    'AugAssign': 'op=',
    'BitAnd': '&',
    'BitOr': '|',
    'BitXor': '^',
    'Break': 'break',
    'Recursion': 'recursive call',
    'ClassDef': 'class',
    'Continue': 'continue',
    'Del': 'del',
    'Delete': 'delete',
    'Dict': '{...}',
    'DictComp': '{...}',
    'Div': '/',
    'Ellipsis': '...',
    'Eq': '==',
    'ExceptHandler': 'except',
    'ExtSlice': '[::]',
    'FloorDiv': '//',
    'For': 'for',
    'FunctionDef': 'def',
    'GeneratorExp': '(... for ...)',
    'Global': 'global',
    'Gt': '>',
    'GtE': '>=',
    'If': 'if',
    'IfExp': '...if...else...',
    'Import': 'import',
    'ImportFrom': 'from ... import ...',
    'In': 'in',
    'Index': '...[...]',
    'Invert': '~',
    'Is': 'is',
    'IsNot': 'is not ',
    'LShift': '<<',
    'Lambda': 'lambda',
    'List': '[...]',
    'ListComp': '[...for...]',
    'Lt': '<',
    'LtE': '<=',
    'Mod': '%',
    'Mult': '*',
    'Nonlocal': 'nonlocal',
    'Not': 'not',
    'NotEq': '!=',
    'NotIn': 'not in',
    'Or': 'or',
    'Pass': 'pass',
    'Pow': '**',
    'RShift': '>>',
    'Raise': 'raise',
    'Return': 'return',
    'Set': '{ ... } (set)',
    'SetComp': '{ ... for ... } (set)',
    'Slice': '[ : ]',
    'Starred': '',
    'Sub': '-',
    'Subscript': '[]',
    'Try': 'try',
    'Tuple': '(... , ... )',
    'UAdd': '+',
    'USub': '-',
    'While': 'while',
    'With': 'with',
    'Yield': 'yield',
    'YieldFrom': 'yield from',
}
s = '''<Table size="sm">'''
s += '''<thead><tr><th>Name</th><th>Pattern</th></tr></thead>'''
s += '''<tbody>'''
for k in NAMES:
    f = "<tr>"
    f += "<td>" + k + "</td>"
    f += "<td>" + NAMES[k].replace("}", '{"}"}').replace("{", '{"{"}',1).replace("<", "&lt;").replace(">", "&gt;") + "</td>"
    f += "</tr>"
    s += f
s += '''</tbody>'''
s += '''</Table>'''
print(s)
