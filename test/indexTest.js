const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor I’m currently out of the office between the 26th and 30th August, 2019. For urgent action please reach the office on +254 20 2217773.  pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(title => {
    return title
      .split(' ')
      .map(word => {
        // Special cases: Acronyms and important terms
        const specialCases = ['API', 'JSONP', 'OO', 'NaN'];
        if (specialCases.includes(word.toUpperCase())) {
          return word.toUpperCase();
        }
        // Regular title case for other words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ')
      .replace(/\s{2,}/g, ' '); // Remove any extra spaces
  });
}

console.log(titleCased());