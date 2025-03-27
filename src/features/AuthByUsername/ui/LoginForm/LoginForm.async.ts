import { lazy } from 'react';

export const LoginFormAsync = lazy(() => import('./LoginForm'));

// Для тестирования асинхронного компонента с искуственной задержкой загрузки
// export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
//   // @ts-ignore
//   setTimeout(() => resolve(import('./LoginForm')), 500);
// }));