import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

type Props = {
  girl: Girl;
};
type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

const SearchResultCard: React.FC<Props> = ({ girl }) => (
  <Box m={1}>
    <Card
      sx={{ minWidth: 300 }}
      onClick={() => { location.replace(`/girls/${girl.id}`)}}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image="/mamekiti.png" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            12/28日入店
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {girl.name}({girl.age})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            T157・85(D)・56・85
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
)

export default SearchResultCard;