import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    const expected = 'someClass class1 class2';

    expect(classNames(
      'someClass', 
      {}, 
      ['class1', 'class2']
    )).toBe(expected);
  });
  
  test('with mods', () => {
    const expected = 'someClass additional hovered scrollable';

    expect(classNames(
      'someClass', 
      {hovered: true, scrollable: true}, 
      ['additional']
    )).toBe(expected);
  })
  
  test('with mods has false param', () => {
    const expected = 'someClass additional hovered';

    expect(classNames(
      'someClass', 
      {hovered: true, scrollable: false},
      ['additional']
    )).toBe(expected);
  })

  test('with mods has undefined params', () => {
    const expected = 'someClass additional hovered actived';

    expect(classNames(
      'someClass', 
      {hovered: true, scrollable: undefined, focused: undefined, actived: true}, 
      ['additional']
    )).toBe(expected);
  })
})