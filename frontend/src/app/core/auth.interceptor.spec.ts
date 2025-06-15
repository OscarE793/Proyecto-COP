import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from '../auth/auth.service';

describe('AuthInterceptor', () => {
  let mockAuthService: Partial<AuthService>;

  beforeEach(() => {
    mockAuthService = {
      getToken: () => 'test-token'
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
  });

  it('should add Authorization header if token exists', (done) => {
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandlerFn = (request) => {
      expect(request.headers.get('Authorization')).toBe('Bearer test-token');
      done();
      return {} as any;
    };

    TestBed.runInInjectionContext(() => {
      AuthInterceptor(req, next);
    });
  });

  it('should not add Authorization header if no token', (done) => {
    (mockAuthService.getToken as any) = () => null;
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandlerFn = (request) => {
      expect(request.headers.has('Authorization')).toBe(false);
      done();
      return {} as any;
    };

    TestBed.runInInjectionContext(() => {
      AuthInterceptor(req, next);
    });
  });
});
