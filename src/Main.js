import { useState } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MovieCards from "./MovieCards";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const OMDB_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchStarted, setSearchStarted] = useState(false);
  
    const searchMovies = async (query) => {
      setLoading(true);
      setSearchStarted(true);
      clearTimeout(timeoutId);
    
      const newTimeoutId = setTimeout(() => {
        setLoading(false);
        setMovies(undefined);
      }, 10000); // 10 seconds timeout
    
      setTimeoutId(newTimeoutId);
    
      const response = await fetch(`${OMDB_URL}&s=${query}`);
      const data = await response.json();
    
      clearTimeout(newTimeoutId);
      setLoading(false);
      setMovies(data.Search);
    }
  
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === '') {
          setSearchStarted(false);
        } else {
          setLoading(true);
          clearTimeout(timeoutId);
          const newTimeoutId = setTimeout(() => {
            searchMovies(e.target.value);
          }, 500); // delay of 500ms
          setTimeoutId(newTimeoutId);
        }
      }

    return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Search for your favorite movies
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Type somethings and see the result fetched immediately  
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
          </Stack>
        </Container>
        <Container maxWidth="sm">
              <Box display="flex" justifyContent="center" m={1} p={1}>
                <TextField 
                  id="outlined-basic" 
                  label="Start Typing..." 
                  variant="outlined" 
                  onChange={handleSearch} 
                  fullWidth
                />
              </Box>
      </Container>
      </Box>
        {loading ? (
            <Typography
            component="h2"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            Loading...
            </Typography>
        ) : (!searchStarted && searchQuery === '') ? (
            <Typography
            component="h2"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            Start typing in the search bar
            </Typography>
        ) : (searchQuery.length < 3) ? (
            <Typography
            component="h2"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            Type at least 3 letters
            </Typography>
        ) : (!movies) ? (
            <Typography
            component="h2"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            No movies found
            </Typography>
        ) : (
            <MovieCards 
            movies={movies}
            />
        )}
    </main>
    )
}