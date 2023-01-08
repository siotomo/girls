import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
  text: string;
};

const SearchConditionButton: React.FC<Props> = ({ text }) => <Button variant="outlined">{text}</Button>;

export default SearchConditionButton;