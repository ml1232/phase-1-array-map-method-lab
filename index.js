const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const capitalizedWords = words.map((word) => {
      if (word.toUpperCase() === 'NaN') {
        // Preserve "NaN" acronym
        return word;
      } else if (word === word.toUpperCase()) {
        // Preserve the case of other acronyms
        return word;
      } else {
        return word.replace(/\b\w/g, (char) => char.toUpperCase());
      }
    });
    const modifiedWords = capitalizedWords.map((word) => {
      if (word.toLowerCase() === 'preventdefault') {
        return 'PreventDefault';
      } else if (word.toLowerCase() === 'stoppropagation') {
        return 'StopPropagation';
      } else {
        return word;
      }
    });
    return modifiedWords.join(' ');
  });
};

