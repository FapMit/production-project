import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserNotifications: build.query<Notification[], string>({
      query: (userId: string) => ({
        url: '/notifications',
        params: {
          userId,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetUserNotificationsQuery;
