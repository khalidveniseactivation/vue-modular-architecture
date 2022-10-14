//The rules here are for reference, and most of them are actually default values, which can be overridden according to your personal habits
module.exports = {
  printWidth: 80, //Single Line Length
  tabWidth: 2, //Indentation Length
  useTabs: false, //Use spaces instead of tab indentation
  semi: false, //Use semicolons at the end of a sentence
  singleQuote: false, //single quotes
  arrowParens: "avoid", //Use parentheses around single-parameter arrow function parameters - eg: (x) => xavoid: omit parentheses
  bracketSpacing: true, //Add space-eg before and after the object: {foo: bar}
  insertPragma: false, //Label the top of the file that has been formatted by preitter
  jsxBracketSameLine: false, //'>'wrap placement for multi-attribute html tags
  rangeStart: 0,
  requirePragma: false, //Format without Top Comment
  trailingComma: "none", //Print trailing commas as as many lines as possible
  useTabs: false //Use spaces instead of tab indentation
};
