import React, { useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Input,
  Heading,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  Box,
} from "@chakra-ui/react";

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

function App() {
  const [possiblePoints, setPossiblePoints] = useState(50);
  const [possibleGradebookPoints, setPossibleGradebookPoints] = useState(50);
  const [studentScore, setStudentScore] = useState<number | null>(null);
  return (
    <ChakraProvider>
      <Container>
        <div className="App">
          <Heading>Lara's Lovely Rubric Machine</Heading>
          <Divider />
          <Stack direction={"column"} marginTop={5}>
            <Box>
              <FormControl>
                <FormLabel>Assignment points value</FormLabel>
                <Input
                  type="number"
                  onChange={(evt) =>
                    setPossiblePoints(parseInt(evt.target.value, 10))
                  }
                  defaultValue={possiblePoints}
                  placeholder="How many points the assignment is worth"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Gradebook points value</FormLabel>
                <Input
                  type="number"
                  onChange={(evt) =>
                    setPossibleGradebookPoints(parseInt(evt.target.value, 10))
                  }
                  defaultValue={possibleGradebookPoints}
                  placeholder="How many points the assignment is worth in the gradebook"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Score</FormLabel>
                <Input
                  type="number"
                  onChange={(evt) =>
                    setStudentScore(parseInt(evt.target.value, 10))
                  }
                  placeholder="Student Score"
                />
              </FormControl>
            </Box>
            <Divider marginTop={10} marginBottom={10} />
            <Box>
              <Heading marginTop={5} as={"h2"}>
                Assignment points value
              </Heading>
              <Heading as={"h3"}>
                {studentScore &&
                  calculateScore(
                    studentScore,
                    possiblePoints,
                    possibleGradebookPoints
                  )}
              </Heading>
            </Box>
          </Stack>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default App;
