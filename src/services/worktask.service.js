import { getHttp, postHttp } from '@/http';

export default {
  /**
   * 获取工作日志
   * @param userid      用户id
   * @param pageNum     页码
   * @param pageSize    一页显示多少条
   * @param type        类型(本周 本月 所有))
   */
  getWorkTaskList: ({ arg1, pageNum, pageSize, type }) => {
    if (!arg1) return '';
    const params = { arg1, pageNum, pageSize: pageSize || 20, type: type};
    return getHttp({ url: '/getUserDayTask', params });
  },
  
};