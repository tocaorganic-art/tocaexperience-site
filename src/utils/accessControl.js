/**
 * Utilitário para controle de acesso baseado em tipo de usuário
 */

export const USER_TYPES = {
  CUSTOMER: 'customer',
  PROVIDER: 'prestador',
  ADMIN: 'admin',
  UNDEFINED: 'indefinido'
};

export const ROUTES_PERMISSIONS = {
  '/dashboard': [USER_TYPES.CUSTOMER, USER_TYPES.PROVIDER, USER_TYPES.ADMIN],
  '/prestador': [USER_TYPES.PROVIDER, USER_TYPES.ADMIN],
  '/admin': [USER_TYPES.ADMIN],
  '/gerador-imagens': [USER_TYPES.PROVIDER, USER_TYPES.ADMIN]
};

export function hasAccessToRoute(userType, route) {
  const allowedTypes = ROUTES_PERMISSIONS[route];
  if (!allowedTypes) return true;
  return allowedTypes.includes(userType);
}

export function getUserType() {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.type || USER_TYPES.UNDEFINED;
  } catch (error) {
    console.error('Erro ao obter tipo de usuário:', error);
    return USER_TYPES.UNDEFINED;
  }
}

export function handleInsufficientPermission(userType, requiredType) {
  return {
    code: 'INSUFFICIENT_USER_TYPE',
    message: `Acesso negado. Tipo de usuário necessário: ${requiredType}`,
    userType: userType || USER_TYPES.UNDEFINED,
    requiredType: requiredType,
    timestamp: new Date().toISOString()
  };
}

export function redirectToPermissionError(userType, requiredType) {
  const errorData = handleInsufficientPermission(userType, requiredType);
  sessionStorage.setItem('permissionError', JSON.stringify(errorData));
  window.location.href = '/permission-error';
}
