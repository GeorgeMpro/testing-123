import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SlideShowComponent} from './slide-show.component';
import {Image} from './image';
// todo create test function with a prototype for the test methods

describe('SlideShowComponent', () => {
  let slideComp: SlideShowComponent;
  let fixture: ComponentFixture<SlideShowComponent>;
  let images: Image[];
  let nativeEle: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowComponent);
    slideComp = fixture.componentInstance;
    slideComp.images = [new Image('1', '3'), new Image('3', '4')];
    images = slideComp.images;
    nativeEle = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(slideComp).toBeTruthy();
  });

  describe('Getting images information', () => {


    it('should have images array', () => {
      expect(images).toBeTruthy();
      expect(images instanceof Array).toBeTruthy();
      expect(images).toEqual(jasmine.any(Array));
      expect(images.length).not.toEqual(0);
    });

    it('should display image array elements in img element', () => {
      const imgElements = nativeEle.querySelectorAll('img');
      expect(imgElements).toBeTruthy();

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const imgEle = imgElements[i];
        assertArrayValueToEqualDomAttribute(image, imgEle, 'src', 'alt');
      }

    });

    function assertArrayValueToEqualDomAttribute(arrayElement, domElement, ...testParams) {
      testParams.forEach(param => {
        expect(arrayElement[param]).toEqual(domElement.getAttribute(param));
      });
    }
  });

  describe('Slide show functionality', () => {

    it('should set next active and current inactive', () => {
      let index = 0;
      slideComp.setActiveImage(images, index);
      slideComp.setNextActive(images, index);
      const current = images[index].isActive;
      const next = images[++index].isActive;
      expect(current).toBeFalsy();
      expect(next).toBeTruthy();
    });
    it('should set previous active and current inactive', () => {
      const index = 0;
      slideComp.setNextActive(images, index);
      slideComp.setPreviousActive(images, index + 1);

      const previous = images[index].isActive;
      expect(previous).toBeTruthy();
    });

    it('next should not exceed array length', () => {
      const length = images.length;
      const nextIndex = slideComp.setNextActive(images, length);

      expect(nextIndex).toEqual(length);
    });
    it('should not exceed last element on previous', () => {
      expect(slideComp.setPreviousActive(images, 0)).toEqual(0);
    });
  });

  describe('Element visibility', () => {
    let activeImageElement: NodeList;
    beforeEach(() => {
      activeImageElement = nativeEle.querySelectorAll('.image__item--active');
    });

    it('should have class inactive class', () => {
      const imageElements = nativeEle.getElementsByClassName('image__item');
      expect(imageElements).toBeTruthy();
      expect(imageElements.length).toEqual(images.length);
    });

    it('should have 1 active class', () => {
      slideComp.setActiveImage(images, 0);
      expect(activeImageElement).toBeTruthy();
      expect(activeImageElement.length).toEqual(1);

    });

    it('should set 1 active if all inactive', () => {
      slideComp.checkInitialArray(images);
      expect(activeImageElement.length).toEqual(1);
    });
    // todo other implementation?
    it('should deal with undefined list', () => {
      expect(slideComp.checkInitialArray(undefined)).toBeTruthy();
    });
  });

  describe('Active image navigation', () => {

    it('should be 0 index on start', () => {
      expect(slideComp.index).toEqual(0);
    });

    it('should set next index', () => {
      slideComp.setNextActive(images, 0);
      expect(slideComp.index).toEqual(1);
    });
    it('should not exceept max length', () => {
      expect(slideComp.setNextActive(images, images.length)).toEqual(images.length);
    });
    it('should set previous index', () => {
      slideComp.setPreviousActive(images, 1);
      expect(slideComp.index).toEqual(0);
    });

    it('should check an undefined array and elements when set active image', () => {
      expect(slideComp.setActiveImage(undefined, 0)).toEqual(true);
      expect(slideComp.setActiveImage([], 0)).toEqual(true);
    });
    it('should check an undefined array and elements when setting inactive', () => {
      expect(slideComp.setInactive(undefined, 0)).toEqual(true);
      expect(slideComp.setInactive([], 0)).toEqual(true);
    });
  });
});
