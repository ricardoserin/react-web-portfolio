import { handleResponse, handleError } from './apiUtils';

const servicesCatalogUrl = `${process.env.API_URL}/servicesCatalog/`;
const serviceTypesUrl = `${process.env.API_URL}/serviceTypes/`;

export function getServicesCatalog() {
  return fetch(servicesCatalogUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getServiceTypes() {
  return fetch(serviceTypesUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveServiceInCatalog(service) {
  return fetch(servicesCatalogUrl + (service.id || ''), {
    method: service.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(service),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteServiceFromCaralog(serviceId) {
  return fetch(servicesCatalogUrl + serviceId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
