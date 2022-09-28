import { TestBed } from '@angular/core/testing';

import { ErrorMessagingService } from './error-messaging.service';

describe('ErrorMessagingService', () => {
  let service: ErrorMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessagingService);
  });

  describe('#constractor', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('#getMessageProperty, #setMessageProperty', () => {
    it('should return expected response', () => {
      const expectedValue = 'message';
      service.setMessageProperty(expectedValue);
      expect(service.getMessageProperty()).toEqual(expectedValue);
    });
  });
});
