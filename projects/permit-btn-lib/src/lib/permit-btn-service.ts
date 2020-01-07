import {PermitBtnData} from './permit-btn-data';

/**
 * 按钮权限服务接口
 */
export class PermitBtnService {
  /**
   * 判断
   * @param data 数据
   */
  check: (data: PermitBtnData) => boolean;
}
