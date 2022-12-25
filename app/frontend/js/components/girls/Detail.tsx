import * as React from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { axios } from '../../lib/axios';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams<{ id: string }>();

  const fetchGirl = React.useCallback(async (): Promise<void> => {
    const data: AxiosResponse<Girl> = await axios().get(`/api/girls/${id}`)
    setGirl(data.data)
  },[id])

  React.useEffect(() => {
    void fetchGirl();
  }, [fetchGirl]);

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
