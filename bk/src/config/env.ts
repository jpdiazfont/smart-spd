export const _ = {
  mode: 'dev',
  database: {
    driver: 'mongodb',
    prod: {
      uri: 'mongodb+srv://fonmin:FPFontech2023@chiwi.rpz8tpy.mongodb.net/chiwi?retryWrites=true&w=majority'
    }, 
    dev: {
      uri: 'mongodb://localhost:27017/chiwi?retryWrites=true&w=majority'
    }
  },
  jwt: 'yp58Fkp-7wEc0IuircFMVNW4V3RuzE-RuyLLBB-HRoMqzJJyYu4tztCmPvdxL5Bt9qPwNsQ9cxmg7AP9KVtca-6HEJVPlQFw0O2EnrklK98RRUZ75jcmV8SV_ln-fFn4s5DVSG_YRpD_gt_il1we0AwOdFpZ2e-2pyhR5eC46xU',
  port: 5001
}
