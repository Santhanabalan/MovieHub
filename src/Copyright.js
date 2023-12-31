import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://santhanabalan.tech/">
          Santhanabalan
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }