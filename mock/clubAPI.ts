const clubs = [
  {
    id: '1',
    name: '广州仓',
    type: '1',
    effective: '1996-09-29',
    price: '34',
    content: 'xxxx',
    createTime: '2022-12-14 15:56:03',
    status: '1',
    updateTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    name: '广州仓',
    type: '2',
    effective: '1996-09-29',
    price: '34',
    content: 'xxxx',
    createTime: '2022-12-14 15:56:03',
    status: '2',
    updateTime: '2022-12-14 15:56:03',
  },
];

export default {
  'GET /api/v1/queryClubList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: clubs },
      errorCode: 0,
    });
  },
  'POST /api/v1/saveClub/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'POST /api/v1/updateClub/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'PUT /api/v1/forbiddenClub/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'PUT /api/v1/enableClub/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
