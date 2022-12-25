import * as React from 'react';
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
