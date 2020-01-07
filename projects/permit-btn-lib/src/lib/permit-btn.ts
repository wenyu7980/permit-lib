/**
 * 按钮权限配置数据格式
 */
export interface PermitBtn {
  /** 按钮名 */
  name: string;
  /** 判断 */
  condition: (data: any) => boolean;
}
