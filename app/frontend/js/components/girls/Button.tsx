import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
  text: string;
}

const ButtonComponent: React.FC<Props> = ({
  text
}) => {
  return (
    <Button variant="outlined">
      {text}
    </Button>
  );
}

export default ButtonComponent;