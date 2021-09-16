/* eslint-env jest */
import strip from '../dist/strip-ansi.js'

jest.setTimeout(64000)

describe('test', () => {
  test('basic', async () => {
    expect(
      strip('\u001B[4mUnicorn\u001B[0m')
    ).toBe('Unicorn')
    expect(
      strip('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007')
    ).toBe('Click')
  })
})
