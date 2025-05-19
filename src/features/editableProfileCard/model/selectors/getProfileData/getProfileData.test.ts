import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileData', () => {
  test('should return value', () => {
    const profileData = {
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
        data: profileData,
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  })
});