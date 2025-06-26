import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, roles } = props;

  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRole = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return (
      <Navigate
        to={getRouteMain()}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!hasRequiredRole) {
    return (
      <Navigate
        to={getRouteForbidden()}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
