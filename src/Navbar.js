import AppBar from '@mui/material/AppBar';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <AppBar position="relative">
            <Toolbar>
            <MovieFilterIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                MovieHUB
            </Typography>
            </Toolbar>
        </AppBar>
    )
}