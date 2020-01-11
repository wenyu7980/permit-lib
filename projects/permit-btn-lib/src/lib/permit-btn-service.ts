/**
 * 按钮权限服务接口
 */

import {PermitBtnData} from './permit-btn-data';

export abstract class PermitBtnService {
  /**
   * 判断
   * @param data 数据
   */
  abstract check(btn: PermitBtnData): boolean;
}
