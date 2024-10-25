import { CanActivateFn } from '@angular/router';

export const superadminGuard: CanActivateFn = (route, state) => {
  const userRole = localStorage.getItem('userRole');
  return userRole === 'superadmin'; // Allow access only if the role is superadmin
};
