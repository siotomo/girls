import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
  text: string;
};

const SquareButton: React.FC<Props> = ({ text }) => (
  <Button variant="contained" disableElevation>
    {text}
  </Button>
)

export default SquareButton;