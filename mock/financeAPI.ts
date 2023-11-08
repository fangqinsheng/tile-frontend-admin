const payments = [
  {
    id: '1',
    name: '广州仓',
    code: '2345432',
    price: '100',
    status: '1',
    createTime: '2022-12-14 15:56:03',
    paymentTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    name: '广州仓',
    code: '2345432',
    price: '100',
    status: '1',
    createTime: '2022-12-14 15:56:03',
    paymentTime: '2022-12-14 15:56:03',
  },
];

const refunds = [
  {
    id: '1',
    name: '广州仓',
    code: '2345432',
    price: '100',
    status: '1',
    createTime: '2022-12-14 15:56:03',
    paymentTime: '2022-12-14 15:56:03',
  },
  {
    id: '2',
    name: '广州仓',
    code: '2345432',
    price: '100',
    status: '1',
    createTime: '2022-12-14 15:56:03',
    paymentTime: '2022-12-14 15:56:03',
  },
];

const prices = [
  {
    id: '1',
    name: '解锁产品联系电话',
    spec: 1,
    price: 0.5,
    num: 3,
  },
  {
    id: '2',
    name: '解锁产品联系电话',
    spec: 1,
    price: 0.5,
    num: 3,
  },
];

export default {
  'GET /api/v1/queryPaymentList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: payments },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryRefundList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: refunds },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryPriceList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: prices },
      errorCode: 0,
    });
  },

  'POST /api/v1/refundPayment/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },

  'POST /api/v1/savePrice/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
