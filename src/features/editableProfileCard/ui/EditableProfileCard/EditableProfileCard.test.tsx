import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 33,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  email: 'admin@gmail.com',
  avatar: 'url.url'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('features/EditableProfileCard', () => {
  test('Readonly mode must change', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('When canceling, the changed data should be reset', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'firstname');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'lastname');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('firstname');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('lastname');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
  });

  test('An error should appear', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('If there are no validation errors, then a PUT request should be sent to the server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'firstname');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();

  });
})