import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/styles";
import {
  Box,
  Typography,
  Container,
  Button,
  createMuiTheme,
  TextField,
} from "@material-ui/core";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontFamily: "Merriweather",
    },
    button: {
      fontFamily: "Inter",
    },
  },
});

function App() {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [helperText, setHelperText] = useState("");

  function isValidUSZip(zipCode) {
    return /^\d{5}(-\d{4})?$/.test(zipCode);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    setShowError(false);
    setHelperText("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          m={3}
        >
          <Typography variant="h2">WTF is the weather like now?</Typography>
          <Box m={1}></Box>
          <TextField
            error={showError}
            id="outlined-error-helper-text"
            label="Zip code"
            value={value}
            helperText={helperText}
            onChange={handleChange}
            variant="outlined"
          />
          <Box m={1}></Box>
          <Button
            variant="contained"
            disabled={!value}
            onClick={() => {
              if (!isValidUSZip(value)) {
                setShowError(true);
                setHelperText("Please enter a valid US zip code.");
              }
            }}
          >
            Let's see...
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
