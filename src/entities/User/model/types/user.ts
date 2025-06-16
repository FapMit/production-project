import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConsts';
import { JsonSettings } from './jsonSettings';



export interface User {
  id: string;
  email: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface userSchema {
  authData?: User;

  _inited: boolean;
}
