import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface StudentScoreProps {
  possibleRubricPoints: number;
  possibleGradebookPoints: number;
}

const calculateScore = (
  studentsScore: number,
  possiblePoints: number,
  possiblePointsInGradebook: number
): string => {
  if (studentsScore === 0) {
    return "0";
  }
  return ((studentsScore / possiblePoints) * possiblePointsInGradebook).toFixed(
    1
  );
};

const StudentScore = (props: StudentScoreProps) => {
  const [studentScore, setStudentScore] = useState<number | null>(null);
  return (
    <Flex align={"center"} justify="center">
      <Box>
        <FormControl>
          <FormLabel>Rubric Score</FormLabel>
          <Input
            type="number"
            onChange={(evt) => setStudentScore(parseInt(evt.target.value, 10))}
            placeholder="Student Score"
          />
        </FormControl>
      </Box>
      <Spacer />
      <Box>
        <p>Score</p>
        <p>
          {studentScore &&
            calculateScore(
              studentScore,
              props.possibleRubricPoints,
              props.possibleGradebookPoints
            )}
        </p>
      </Box>
    </Flex>
  );
};

export default StudentScore;
