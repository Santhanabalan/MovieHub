import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function MovieCards({ movies }) {
    return(
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
            {movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={movie.Poster}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                </Typography>
                <Typography>
                    {`${movie.Type} - ${movie.Year}`}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" href={movie.Poster}>View image</Button>
                <Button size="small" href={`https://www.imdb.com/title/${movie.imdbID}/`}>Visit IMDB</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
            </Grid>
        </Container>
    );
}