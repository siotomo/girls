import * as React from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../../lib/axios';
import Grid2 from '@mui/material/Unstable_Grid2';

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
    const data = await axios().get(`/api/girls/${id}`);
    setGirl(data.data);
  }, [id]);

  React.useEffect(() => {
    fetchGirl();
  }, [fetchGirl]);

  return (
    <>
      <Grid2 container spacing={2} sx={{ py: 3, mt: 0 }} className="heroheader">
        <Grid2 xs={5} sx={{ textAlign: 'center' }}>
          <div className="imagesample"></div>
        </Grid2>
        <Grid2 xs={7}>
          {girl && (
            <>
              <div className="h4">
                {girl?.name}（{girl?.age}）
              </div>
              {girl?.score && (
                <>
                  <div>スコア</div>
                  <div className="score">{girl?.score}</div>
                </>
              )}
            </>
          )}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Detail;
