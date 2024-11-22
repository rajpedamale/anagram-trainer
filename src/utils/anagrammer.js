function anagramBuilder(word) {
  const anagrams = [];

  function generate(current, remaining) {
    if (!remaining && current !== word) {
      anagrams.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        generate(
          current + remaining[i],
          remaining.slice(0, i) + remaining.slice(i + 1),
        );
      }
    }
  }

  generate("", word);
  return anagrams;
}

function anagramRandomizer(word) {
  const anagrams = anagramBuilder(word);
  const randIndex = Math.floor(Math.random() * anagrams.length);
  return anagrams[randIndex];
}

module.exports = { anagramRandomizer };
