"use client";

import { useState, useEffect } from "react";

interface TypingTitleProps {
  text: string;
  className?: string;
  typingDisabled?: boolean; // when true, render instantly and just run sentence highlighting
}

export function TypingTitle({ text, className = "", typingDisabled = false }: TypingTitleProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedSentence, setHighlightedSentence] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Split text into sentences
  const sentences = text.split(". ").map((sentence, index) =>
    index === text.split(". ").length - 1 ? sentence : sentence + ". "
  );

  // Initialize instantly when typing is disabled
  useEffect(() => {
    if (typingDisabled) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      setIsTypingComplete(true);
    }
  }, [typingDisabled, text]);

  useEffect(() => {
    if (typingDisabled) return; // skip typing loop when disabled

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Typing speed

      return () => clearTimeout(timer);
    } else {
      // Typing finished – mark complete. Do NOT trigger highlight advance here
      // to avoid double-increment with the highlighting effect below.
      if (!isTypingComplete) setIsTypingComplete(true);
    }
  }, [currentIndex, text, typingDisabled, isTypingComplete]);

  // Highlight sentences on an interval after typing is complete
  useEffect(() => {
    if (!isTypingComplete) return;
    const timer = setTimeout(() => {
      setHighlightedSentence((prev) => (prev + 1) % sentences.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [highlightedSentence, isTypingComplete, sentences.length]);

  const renderText = () => {
    let result: JSX.Element[] = [];
    let currentCharIndex = 0;

    sentences.forEach((sentence, sentenceIndex) => {
      const sentenceChars = sentence.split("");

      sentenceChars.forEach((char, charIndex) => {
        const globalIndex = currentCharIndex;
        const isHighlighted = sentenceIndex === highlightedSentence && isTypingComplete;
        const isVisible = globalIndex < displayedText.length;

        result.push(
          <span
            key={`${sentenceIndex}-${charIndex}`}
            className={`transition-colors duration-300 ${
              isHighlighted ? 'font-black' : ''
            } ${!isVisible ? 'invisible' : ''}`}
            style={{
              color: isHighlighted ? '#5d18eb' : 'inherit'
            }}
          >
            {char}
          </span>
        );
        currentCharIndex++;
      });
    });

    return result;
  };

  return (
    <h1 className={`text-3xl font-extrabold lg:text-6xl animate-fade-in-up font-lexend ${className}`}>
      {renderText()}
      {!typingDisabled && currentIndex < displayedText.length && (
        <span className="animate-pulse" style={{ color: '#5d18eb' }}>|</span>
      )}
    </h1>
  );
} 