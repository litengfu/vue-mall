// import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';
// 获取详情页数据
export const getProductData = id => {
  const url = `https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?data=itemNumId%22%3A%22${id}%22%7D`;
  const param = {};
  return jsonp(url, param, jsonpOptions).then(res => {
    if (res.ret[0] === 'SUCCESS::调用成功') {
      return res.data;
    }
    throw new Error('没有获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  });
};
