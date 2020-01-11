import {Directive, Input, Optional, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermitBtnData} from './permit-btn-data';
import {PermitBtn} from './permit-btn';
import {PermitBtnService} from './permit-btn-service';

const PERMIT_BUTTONS: Map<string, PermitBtn> = new Map<string, PermitBtn>();

/**
 * 按钮权限
 */
@Directive({
  selector: '[wyPermitBtn]'
})
export class PermitBtnDirective {
  @Input('wyPermitBtn')
  set condition(btn: PermitBtnData) {
    if (this.btnService && !this.btnService.check(btn)) {
      this.viewContainer.clear();
      return;
    }
    if (!PERMIT_BUTTONS.has(btn.name)) {
      this.viewContainer.clear();
      return;
    }
    if (!PERMIT_BUTTONS.get(btn.name).condition(btn.data)) {
      this.viewContainer.clear();
      return;
    }
    this.viewContainer.clear();
    // 创建模板对应的内嵌视图
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Optional() private btnService: PermitBtnService,
  ) {
  }
}

/**
 * 按钮权限配置
 * @param btns 配置
 */
export function PermitButtons(btns: PermitBtn[]) {
  for (const btn of btns) {
    PERMIT_BUTTONS.set(btn.name, btn);
  }
  return (target) => {
  };
}

