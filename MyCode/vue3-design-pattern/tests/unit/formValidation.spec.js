import { expect } from 'chai';
import { isBetween } from '@/components/form';
describe('form.js', () => {
  it('isBetween', () => {
    const v = isBetween(3, { min: 1, max: 5 });
    expect(v.valid).to.be.true;
  });
});
