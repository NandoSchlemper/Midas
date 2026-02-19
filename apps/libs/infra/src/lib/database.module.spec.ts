import { infra } from './database.module';

describe('infra', () => {
  it('should work', () => {
    expect(infra()).toEqual('infra');
  });
});
