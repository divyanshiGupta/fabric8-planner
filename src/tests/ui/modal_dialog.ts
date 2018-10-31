import { ElementFinder, ExpectedConditions as until } from 'protractor';
import * as ui from '../ui';
import { BaseElement } from './base.element';


export class ModalDialog extends BaseElement {
  content = new BaseElement(this.$('.modal-content'));
  // optional
  footer = new BaseElement(this.content.$('.modal-footer'));
  confirm = new ui.Clickable(this.$('#modal-confirm'), 'Confirm');

  constructor(element: ElementFinder, name?: string) {
    super(element, name);
  }

  async ready() {
    await super.ready();
    await this.content.ready();
  }

  async open() {
    await this.ready();
    this.log('Opened');
    return this;
  }

  async clickConfirmButton() {
    await this.confirm.clickWhenReady();
  }
}
