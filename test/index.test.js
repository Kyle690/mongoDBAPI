import { BASE_URL, server, expect } from './setup';

describe('test index', () => {
  it('gets home route', (done) => {
    server
      .get(`${BASE_URL}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.equal('Test Env set');
      });
    done();
  });
});
