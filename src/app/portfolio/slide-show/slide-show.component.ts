import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {Image} from './image';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  index = 0;
  @Input() images: Image[];

  // detect changes to the array
  constructor(private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.checkInitialArray(this.images);
  }

  checkInitialArray(images) {
    if (images && this.checkInactiveImages(images)) {
      this.setActiveImage(images, 0);
    }
    return true;
  }

  /**
   * Check the array if all the images are in active display
   * @param images
   */
  checkInactiveImages(images: Image[]) {
    for (let image of images) {
      if (image.isActive) {
        return false;
      }
    }
    return true;
  }

  setNextActive(images: Image[], index: number) {
    this.index = index;
    const isInRange = this.index < images.length - 1;
    if (isInRange) {
      this.setInactive(images, this.index);
      this.setActiveImage(images, ++this.index);
    }
    return this.index;
  }

  setPreviousActive(images: Image[], index: number) {
    this.index = index;
    if (index !== 0) {
      this.setInactive(images, this.index);
      this.setActiveImage(images, --this.index);
    }
    return this.index;
  }

  /**
   * Set image to be visible
   * @param images - image array
   * @param index - index of image to be set to active
   */
  setActiveImage(images: Image[], index: number) {
    if (this.handleUndefinedImages(images, index)) {
      images[index].isActive = true;
      this.changeDetection.detectChanges();
    }
    return true;
  }

  setInactive(images: Image[], index: number) {
    if (this.handleUndefinedImages(images, index)) {
      images[index].isActive = false;
      this.changeDetection.detectChanges();
    }

    return true;
  }

  private handleUndefinedImages(images: Image[], index: number) {
    if (typeof images !== 'undefined') {
      if (typeof images[index] !== 'undefined') {
        return true;
      }
    }
    return false;
  }
}
