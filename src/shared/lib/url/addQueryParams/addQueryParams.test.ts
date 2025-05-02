import { getQueryParams } from "./addQueryParams";

describe('addQueryParams', function () {
  test('test with one param', () => {
    const params = getQueryParams({test: 'test'});
    expect(params).toBe('?test=test');
  });
  
  test('test with multiply param', () => {
    const params = getQueryParams({test: 'value', test2: 'value2'});
    expect(params).toBe('?test=value&test2=value2');
  });
  
  test('test with undefined', () => {
    const params = getQueryParams({test: 'value', test2: undefined});
    expect(params).toBe('?test=value');    
  });
})