/*
Por convención, las acciones que terminan en "_SUCCESS" serán asumidos como el resultado
de un llamado a una API completoado.

Si la acción que indica una llamada a una API no tiene el sufijo "_SUCCESS". el estado
no se actualizará y no se mostrará el estado "cargando"

Esto puede ser deseable si se desea usar "acciones optimistas". Es decir, se asume que la
acción se completó correctamente aunque no se tenga la certeza de eso
*/

export const CREATE_TICKET = 'CREATE_TICKET';
export const CREATE_SERVICE_IN_CATALOG = 'CREATE_SERVICE_IN_CATALOG';
export const LOAD_SERVICES_CATALOG_SUCCESS = 'LOAD_SERVICES_CATALOG_SUCCESS';
export const LOAD_SERVICE_TYPES_SUCCESS = 'LOAD_SERVICE_TYPES_SUCCESS';
export const UPDATE_SERVICE_SUCCESS = 'UPDATE_SERVICE_SUCCESS';
export const CREATE_SERVICE_SUCCESS = 'CREATE_SERVICE_SUCCESS';
export const BEGIN_API_CALL = 'BEGIN_API_CALL';
export const API_CALL_ERROR = 'API_CALL_ERROR';

export const DELETE_SERVICE_OPTIMISTIC = 'DELETE_SERVICE_OPTIMISTIC';
