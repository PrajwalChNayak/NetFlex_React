const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const addAuthorizationHeader = async (headers, token) => {
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
};

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};

const createRequest = async (url, method, payload = null, token = false, isFormData = false) => {
    const headers = { ...defaultHeaders };
    await addAuthorizationHeader(headers, token);

    const requestOptions = {
        method,
        headers
    };

    // Check if the payload is form data
    if (payload) {
        if (isFormData) {
            // If form data, set content type to 'multipart/form-data'
            delete headers['Content-Type']; // Remove the default content type
            requestOptions.body = payload;
        } else {
            // If not form data, stringify the payload as JSON
            requestOptions.body = JSON.stringify(payload);
        }
    }

    try {
        const response = await fetch(url, requestOptions);
        return await handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const POSTNETWORK = async (url, payload, token = false, isFormData = false) => {
    return await createRequest(url, 'POST', payload, token, isFormData);
};

export const GETNETWORK = async (url, token = false) => {
    return await createRequest(url, 'GET', null, token, false);
};

export const PUTNETWORK = async (url, payload=null, token = false, isFormData = false) => {
    return await createRequest(url, 'PUT', payload, token, isFormData);
};

export const PATCHNETWORK = async (url, payload=null, token = false, isFormData = false) => {
    return await createRequest(url, 'PATCH', payload, token, isFormData);
};

export const DELETENETWORK = async (url, token = false, isFormData = false) => {
    return await createRequest(url, 'DELETE', null, token, isFormData);
};
