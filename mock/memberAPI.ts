const members = [
  {
    id: '1',
    userName: '广州仓',
    sex: '0',
    birthday: '1996-09-29',
    telephone: '18722773388',
    age: '34',
    address: 'xxxx',
    webchat: '',
    createTime: '2022-12-14 15:56:03',
    memberCard: '2',
    status: '2',
    updateTime: '2022-12-14 15:56:03',
    freezeReason: '',
    balance: '0',
  },
  {
    id: '2',
    userName: '广州仓',
    sex: '1',
    birthday: '1997-09-18',
    telePhone: '18277336644',
    age: '23',
    address: 'xxxx',
    webchat: 'Viye',
    createTime: '2022-12-14 15:56:03',
    memberCard: '1',
    status: '1',
    updateTime: '2022-12-14 15:56:03',
    freezeReason: '发布色情内容',
    balance: '233',
  },
];

const details = {
  id: 'xxx',
  userName: '111',
  sex: '1',
  birthday: '111',
  age: '111',
  telephone: '111',
  adress: '111',
  webchat: '111',
  createTime: '111',
  status: '111',
  freezeReason: '111',
  updateTime: '111',
  balance: 290.84,
  clubInfo: [
    {
      id: 1,
      name: 'xxx',
      type: '1',
      effective: 7,
      price: 500,
      createTime: '2023-9-12  13:23:34',
      endTime: '2024-9-12  13:23:34',
      status: '1',
    },
    {
      id: 2,
      name: 'xx1x',
      type: '1',
      effective: 7,
      price: 500,
      createTime: '2023-9-12  13:23:34',
      endTime: '2024-9-12  13:23:34',
      status: '1',
    },
  ],
  balanceDetail: [
    {
      id: 1,
      happenTime: '2023-9-12  13:23:34',
      type: '1',
      price: 7,
    },
    {
      id: 2,
      happenTime: '2023-9-12  13:23:34',
      type: '1',
      price: 7,
    },
  ],
};

export default {
  'GET /api/v1/queryMemberList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: members },
      errorCode: 0,
    });
  },
  'POST /api/v1/saveMember/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'PUT /api/v1/openVip/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'PUT /api/v1/thawMember/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'PUT /api/v1/freezeMember/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryMember/': (req: any, res: any) => {
    res.json({
      success: true,
      data: details,
      errorCode: 0,
    });
  },
};
