import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileForm', () => {
  test('should return value', () => {
    const formData = {
      email: 'admin@admin.admin',
      age: 22,
      city: 'Minsk',
      country: Country.Belarus,
      currency: Currency.USD,
      firstname: 'Admin',
      lastname: 'Adminov',
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  })
});