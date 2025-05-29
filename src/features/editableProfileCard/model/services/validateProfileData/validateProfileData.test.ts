/* eslint-disable @typescript-eslint/no-unused-vars */
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from "../../consts/consts";

const data = {
  email: 'admin@admin.admin',
  age: 22,
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.USD,
  firstname: 'Admin',
  lastname: 'Adminov',
}

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_EMAIL
    ]);
  });
});