const notices = [
  {
    id: '1',
    userId: '111',
    name: '解锁产品联系电话',
    content: '123213213',
    feedbackTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    userId: '111',
    name: '解锁产品联系电话',
    content: '123213213',
    feedbackTime: '2022-12-14 15:56:03',
  },
];

export default {
  'POST /api/v1/saveNotice': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryNoticeList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: notices },
      errorCode: 0,
    });
  },
};
