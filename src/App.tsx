import React, { useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

const calculateScore = (
  studentsScore: number,
  possiblePoints: number,
  possiblePointsInGradebook: number
): number => {
  return Math.round(
    (studentsScore / possiblePoints) * possiblePointsInGradebook
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
          <h1>Lara's Lovely Rubric Machine</h1>
          <Grid templateRows="repeat(4, 1fr)" gap={4}>
            <GridItem>
              <p>Assignment points value</p>
              <Input
                type="number"
                onChange={(evt) =>
                  setPossiblePoints(parseInt(evt.target.value, 10))
                }
                placeholder="How many points the assignment is worth"
              />
            </GridItem>
            <GridItem>
              <p>Gradebook points value</p>
              <Input
                type="number"
                onChange={(evt) =>
                  setPossibleGradebookPoints(parseInt(evt.target.value, 10))
                }
                placeholder="How many points the assignment is worth in the gradebook"
              />
            </GridItem>
            <GridItem>
              <p>Score</p>
              <Input
                type="number"
                onChange={(evt) =>
                  setStudentScore(parseInt(evt.target.value, 10))
                }
                placeholder="Student Score"
              />
            </GridItem>
            <GridItem>
              <p>Assignment points value</p>
              <p>
                {studentScore &&
                  calculateScore(
                    studentScore,
                    possiblePoints,
                    possibleGradebookPoints
                  )}
              </p>
            </GridItem>
          </Grid>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default App;
