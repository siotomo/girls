import * as React from 'react';
import { useParams } from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';
import { axios } from '../../lib/axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid2 from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

type GirlImages = {
  id: number;
  url: string;
}

type GirlTags = {
  id: number;
  name: string;
}

type GirlMoves = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  desc: string;
}

// 画像
const images: GirlImages[] = [
  { id: 1, url: 'https://placehold.jp/80x107.png' },
  { id: 2, url: 'https://placehold.jp/3d4070/ffffff/80x107.png' },
]

// スケジュールの表
function createData(
  date: string,
  time: string,
  booking: string,
) {
  return { date, time, booking };
}

const rows = [
  createData('12/01', '20:00〜23:00', '予約する'),
  createData('12/02', '20:00〜23:00', '予約する'),
]

// タグ
const tags: GirlTags[] = [
  { id: 1, name: '清楚系' },
  { id: 2, name: 'おっとり' },
  { id: 3, name: '禁煙' },
]

// 動画
const moves: GirlMoves[] = [
  {
    id: 1,
    title: '【超必見】SSS級！！アイドル以上のルックス',
    url: '',
    image_url: 'https://placehold.jp/600x340.png',
    desc: 'デリヘル(スタンダード/新宿・歌舞伎町) 【ナイトヴィーナス】のご紹介！',
  },
  {
    id: 2,
    title: 'バイーンッ！驚愕の弾力乳！まさにワールドカップ級！',
    url: '',
    image_url: 'https://placehold.jp/600x340.png',
    desc: 'デリヘル(スタンダード/新宿・歌舞伎町) 【ナイトヴィーナス】のご紹介！',
  },
]

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams<{ id: string }>();

  const fetchGirl = React.useCallback(async (): Promise<void> => {
    const data = await axios().get(`/api/girls/${id}`)
    setGirl(data.data)
  },[id])

  // 画像の切り替え
  const [mainImage, setMainImage] = React.useState<string>(images[0].url);

  React.useEffect(() => {
    fetchGirl();
  }, [fetchGirl]);

  return (
    <>
      <Grid2 container spacing={2} sx={{ py: 3, mt: 0 }} className='heroheader'>
        <Grid2 xs={5} sx={{ textAlign: 'center' }}>
          <div className='heroheader__imagemain'>
            <img src={mainImage} alt="image" />
          </div>
          <div className='heroheader__images'>
            {
              images.map((image: GirlImages) => {
                return (
                  <div key={image.id}
                       className='heroheader__images__item'
                       onMouseEnter={()=> setMainImage(image.url)}>
                    <img src={image.url} alt="image" />
                  </div>
                )
              })
            }
          </div>
        </Grid2>
        <Grid2 xs={7}>
          {
            girl &&
              <>
                <div className='girlname'>{girl?.name}（{girl?.age}）</div>
                <div>ぷるるんギャング ホテヘル</div>
                {
                  girl?.score &&
                  <div className='girlinfo'>
                    <div className='girlinfo__item'>
                      <div className='girlinfo__item__title'>スコア</div>
                      <div className='girlinfo__item__content'>{girl?.score}</div>
                    </div>
                    <div className='girlinfo__item'>
                      <div className='girlinfo__item__title'>サイズ</div>
                      <div className='girlinfo__item__content'>T160・85（C）・58・85</div>
                    </div>
                  </div>
                }
              </>
          }
        </Grid2>
      </Grid2>

      <div className='showitem'>
        <div className='showitem__title'>スケジュール</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>日付</TableCell>
                <TableCell>時間</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.date}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell align="right">{row.booking}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='showitem'>
        <div className='showitem__title'>説明</div>
        <div className='showitem__desc'>
          純情可憐☆誰もが癒されるロリ系美少女☆
          輝き放つ純粋で澄んだ瞳、幼い可愛らしさを残しつつも、綺麗に整ったお顔立ち☆
        </div>
        <Stack direction="row" spacing={1}>
          {
            tags.map((tag: GirlTags) => {
              return <Chip label={tag.name} />
            })
          }
        </Stack>
      </div>
      <div className='showitem'>
        <div className='showitem__title'>動画</div>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            moves.map((move: GirlMoves) => {
              return (
                <Grid2 xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={move.image_url}
                        alt="movie"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{move.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{move.desc}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid2>
              )
            })
          }
        </Grid2>
      </div>
    </>
  );
};

export default Detail;
