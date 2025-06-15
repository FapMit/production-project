import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConsts';

export interface User {
  id: string;
  email: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
}

export interface userSchema {
  authData?: User;

  _inited: boolean;
}
