// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGaurdGuard: CanActivateFn = (route, state) => {
//   const _router = inject(Router)
//   const isLogin = localStorage.getItem("isLogin")
//   console.log(isLogin)
// if(isLogin){
//   _router.navigate(['/main/dashboard'])

//   return true
// }else{
//   alert("logon first")
//   _router.navigate(['/auth/login'])
//   return false
// }
  
//   return true;
// };
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin) {
    return true; // Allow access
  } else {
    alert("Please log in first");
    router.navigate(['/auth/login']);
    return false; // Prevent access
  }
};
