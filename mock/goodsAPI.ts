const products = [
  {
    id: '1',
    userId: '123',
    userName: '广州仓',
    telephone: '2345432',
    code: '123213',
    name: '123123',
    description: '123123213213',
    imgurl: 'xxx',
    status: '1',
    createTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    userId: '123',
    userName: '广州仓',
    telephone: '2345432',
    code: '123213',
    name: '123123',
    description: '123123213213',
    imgurl: 'xxx',
    status: '1',
    createTime: '2022-12-14 15:56:03',
  },
];

const contracts = [
  {
    id: '1',
    userId: '123',
    userName: '广州仓',
    telephone: '2345432',
    content: '123213',
    imgurl: 'xxx',
    status: '1',
    publishTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    userId: '123',
    userName: '广州仓',
    telephone: '2345432',
    content: '123213',
    imgurl: 'xxx',
    status: '1',
    publishTime: '2022-12-14 15:56:03',
  },
];

export default {
  'GET /api/v1/queryProductList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: products },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryContractList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: contracts },
      errorCode: 0,
    });
  },

  'PUT /api/v1/listProducts/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'PUT /api/v1/delistProduct/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'PUT /api/v1/thawProduct/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'PUT /api/v1/freezeProduct/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'POST /api/v1/multiImport/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
