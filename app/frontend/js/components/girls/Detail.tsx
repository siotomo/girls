import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useParams } from 'react-router-dom';
import { girlDetail } from '../../modules/girls';
import { GirlModel } from '../../lib/interface/model';

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<GirlModel>();
  const { id } = useParams<{ id: string }>();

  const fetchGirl = React.useCallback(async (): Promise<void> => {
    const res = await girlDetail(id);
    setGirl(res.data.payload.girl);
  }, [id]);

  React.useEffect(() => {
    void fetchGirl();
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
