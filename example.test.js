import { sum } from './example'

it('sums', () => {
    let res = sum(4, 3)
    expect(res).toBe(7)
})