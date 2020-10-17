import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/tickets/`;

export function getTickets() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTicket(ticket) {
  return fetch(baseUrl + (ticket.id || ''), {
    method: ticket.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(ticket),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTicket(ticketId) {
  return fetch(baseUrl + ticketId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
