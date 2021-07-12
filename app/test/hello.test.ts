import request from 'supertest';
import { app } from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    request(app).get('/').expect(200, done);
  });
});
