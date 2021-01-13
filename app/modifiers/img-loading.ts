import Modifier from 'ember-modifier';
import { action } from '@ember/object';

export default class ImgLoadingModifier extends Modifier {
  src?: string;
  _hideClass = 'loading';

  hideImage(): void {
    this.element.classList.add(this._hideClass);
  }

  @action
  showImage(): void {
    this.element.classList.remove(this._hideClass);
  }

  handleImageLoading(): void {
    this.hideImage();

    (this.element as HTMLImageElement).onload = this.showImage;
  }

  didReceiveArguments(): void {
    if (this.src !== this.args.positional[0]) {
      this.src = this.args.positional[0] as string;
      this.handleImageLoading();
    }
  }

  willDestroy(): void {
    (this.element as HTMLImageElement).onload = null;
  }
}
