import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardComponent() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total value
        </Typography>
        <Typography variant="h5" component="div">
          $ 10,000
        </Typography>
      </CardContent>
    </Card>
  );
}
