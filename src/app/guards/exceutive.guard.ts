import { CanActivateFn } from '@angular/router';

export const exceutiveGuard: CanActivateFn = (route, state) => {
  const userRole = localStorage.getItem('userRole');
  return userRole === 'exceutive'; // Allow access only if the role is executive
};
