import { apiRequest } from './utils';
function getStateList() {
    return apiRequest('GET', '/State');
}

export default getStateList;