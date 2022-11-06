import * as React from 'react';
import { useParams } from 'react-router-dom';

const SecondParam: React.FC = () => {
  const { id } = useParams() as { id: string };

  return (
    <>
      props is {id}
    </>
  );
};

export default SecondParam;
