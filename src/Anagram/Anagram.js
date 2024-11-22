import React, { useEffect, useRef, useState } from "react";
import {
  ButtonContainer,
  Button,
  Card,
  Encouragement,
  Title,
  Answer,
} from "./Anagram.style";
import { anagramRandomizer } from "../utils/anagrammer";
import { CompletedWords } from "../CompletedWords";

const MyComponent = () => {
  const [originalList, setOriginalList] = useState([]);
  const [words, setWords] = useState([]);
  const [anagram, setAnagram] = useState({});
  const [guess, setGuess] = useState("");
  const [showWord, setShowWord] = useState(false);
  const [usedWords, setUsedWords] = useState([]);
  const [showUsedWords, setShowUsedWords] = useState(false);
  const [minLength, setMinLength] = useState(4);
  const [maxLength, setMaxLength] = useState(6);
  const guessField = useRef(null);

  const isCorrectGuess =
    guess && anagram.word && anagram.word.toLowerCase() === guess.toLowerCase();

  useEffect(() => {
    fetch("/wordlist.10000.txt")
      .then((res) => res.text())
      .then((data) => {
        const originalList = data.split("\n");
        setOriginalList(originalList);
        console.log(`${originalList.length} words loaded`);
      });
    return () => setWords([]);
  }, []);

  useEffect(() => {
    if (originalList.length) {
      filterWordList();
    }
  }, [originalList, minLength, maxLength]);

  useEffect(() => {
    if (guessField) {
      guessField.current.focus();
    }
  }, [guessField.current, anagram]);

  useEffect(() => {
    setShowWord(false);
    setGuess("");
  }, [anagram]);

  useEffect(() => {
    const anagramDetails = generateNewAnagram();
    setAnagram(anagramDetails);
  }, [words]);

  const nextWordHandler = () => {
    const anagramDetails = generateNewAnagram();
    setUsedWords([...usedWords, { ...anagram, guess }]);
    setAnagram(anagramDetails);
  };

  const filterWordList = () => {
    const wordArray = originalList.filter(
      (word) => word.length >= minLength && word.length <= maxLength,
    );
    console.log(`${wordArray.length} words filtered`);
    setWords(wordArray);
  };

  const generateNewAnagram = () => {
    if (!words.length) return {};

    const randomIndex = Math.floor(Math.random() * words.length);
    const anagramDetails = {
      word: words[randomIndex],
      anagram: anagramRandomizer(words[randomIndex]),
    };
    console.log(anagramDetails);
    return anagramDetails;
  };

  const handleMinLength = (event) => {
    const value = isNaN(event.target.value) ? 1 : parseInt(event.target.value);
    const minLength = Math.min(value, 10);
    setMinLength(minLength);
  };

  const handleMaxLength = (event) => {
    const value = isNaN(event.target.value) ? 10 : parseInt(event.target.value);
    const maxLength = Math.max(value, 5);
    setMaxLength(maxLength);
  };

  const handleGuessChange = (event) => {
    setShowWord(false);
    setGuess(event.target.value);
  };

  return (
    <Card>
      <Title>
        Anagram: <span style={{ color: "#1b6bbb" }}>{anagram.anagram}</span>
      </Title>
      <input
        ref={guessField}
        type="text"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Guess the word"
        style={{ height: "2em" }}
      />
      {isCorrectGuess && (
        <Encouragement>
          <span>You got it!</span>
        </Encouragement>
      )}
      {!isCorrectGuess && (
        <ButtonContainer>
          {showWord && <Answer>{anagram.word}</Answer>}
          {!showWord && (
            <Button
              onClick={() => {
                setShowWord(true);
              }}
            >
              Show the word
            </Button>
          )}
        </ButtonContainer>
      )}
      <ButtonContainer>
        <Button onClick={nextWordHandler}>Next word</Button>
      </ButtonContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "40%",
          margin: "5px auto",
        }}
      >
        <span>Min Letters</span>
        <input
          type="number"
          value={minLength}
          onChange={handleMinLength}
          style={{ height: "1em", width: "2em" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "40%",
          margin: "5px auto",
        }}
      >
        <span>Max Letters</span>
        <input
          type="number"
          value={maxLength}
          onChange={handleMaxLength}
          style={{ height: "1em", width: "2em" }}
        />
      </div>
      <ButtonContainer>
        <Button onClick={() => setShowUsedWords(!showUsedWords)}>
          {showUsedWords ? "Hide History" : "Show History"}
        </Button>
      </ButtonContainer>
      <div>
        {showUsedWords && (
          <CompletedWords key={"Header"} usedWords={usedWords} />
        )}
      </div>
    </Card>
  );
};

export default MyComponent;
