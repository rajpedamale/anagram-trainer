import * as PropTypes from "prop-types";
import {
  Table,
  TableColumnData,
  TableColumnHeader,
  TableColumnSeparator,
  TableRow,
} from "./CompletedWords.style";
import React from "react";

export const CompletedWords = ({ usedWords }) => {
  const getUsedWordRows = (word) => {
    return (
      <TableRow key={word.word}>
        <TableColumnData>{word.anagram}</TableColumnData>
        <TableColumnSeparator>|</TableColumnSeparator>
        <TableColumnData>{word.word}</TableColumnData>
        <TableColumnSeparator>|</TableColumnSeparator>
        <TableColumnData>{word.guess}</TableColumnData>
      </TableRow>
    );
  };
  return (
    <Table>
      <TableRow>
        <TableColumnHeader style={{ fontWeight: "bold" }}>
          Anagram
        </TableColumnHeader>
        <TableColumnSeparator>|</TableColumnSeparator>
        <TableColumnHeader style={{ fontWeight: "bold" }}>
          Word
        </TableColumnHeader>
        <TableColumnSeparator>|</TableColumnSeparator>
        <TableColumnHeader style={{ fontWeight: "bold" }}>
          Guess
        </TableColumnHeader>
      </TableRow>
      {usedWords.map(getUsedWordRows)}
    </Table>
  );
};

CompletedWords.propTypes = {
  usedWords: PropTypes.arrayOf(PropTypes.any),
};
