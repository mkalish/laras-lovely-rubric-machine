import React, { useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Container,
  Input,
  Heading,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  Box,
} from "@chakra-ui/react";
import StudentScore from "./StudentScore";

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
  const [numberOfRows, setNumberOfRows] = useState(35);
  return (
    <ChakraProvider>
      <Container>
        <div className="App">
          <Heading>Lara's Lovely Rubric Machine</Heading>
          <Divider />
          <Stack direction={"column"} marginTop={5}>
            <Box>
              <FormControl>
                <FormLabel>Rubric Points Possible</FormLabel>
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
            <Divider />
            {Array.apply(null, Array(numberOfRows)).map(() => {
              return (
                <StudentScore
                  possibleGradebookPoints={possibleGradebookPoints}
                  possibleRubricPoints={possiblePoints}
                />
              );
            })}
          </Stack>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default App;
