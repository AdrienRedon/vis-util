module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',

    // @TODO: Forces overloaded methods to have docs between overloads and the implementation.
    // I don't like it but it doesn't seem to break anything.
    // Keeping for now.
    // @TODO: Deprecated, anything like this for tsdoc?
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: true,
        },
      },
    ],

    // @TODO: Seems to mostly work just fine but I'm not 100 % sure.
    // @TODO: Deprecated, anything like this for tsdoc?
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          return: 'returns',
        },
        requireParamDescription: true,
        requireParamType: false,
        requireReturn: false, // Requires return for void functions.
        requireReturnDescription: true,
        requireReturnType: false,
      },
    ],

    // This is really crazy given the functions in this package.
    '@typescript-eslint/no-explicit-any': 'off',
    // These are hoisted, I have no idea why it reports them by default.
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, typedefs: false }],
    // False positives for overloading, also tsc compiles with errors anyway.
    'no-dupe-class-members': 'off',
    // Blocks typesafe exhaustive switch (switch (x) { … default: const never: never = x }).
    'no-case-declarations': 'off',
    // Reports typeof bigint as an error, tsc validates this anyway so no problem turning this off.
    'valid-typeof': 'off',
  },
}
