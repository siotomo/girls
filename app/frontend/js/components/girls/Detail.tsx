import * as React from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../../lib/axios';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
}

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams() as { id: string };

  const fetchGirl = React.useCallback(async () => {
    const res = await axios().get(`/api/girls/${id}`);
    const girl: Girl = res.data;
    setGirl(girl);
  }, []);

  React.useEffect(() => {
    fetchGirl();
  }, []);

  return (
    <>
      {girl && (
        <>
          {girl?.name}
          {girl?.age}
          {girl?.score}
        </>
      )}
    </>
  );
};

export default Detail;
