const handleRequest = async (response, callback, status = 200, allow404 = false) => {
    try {
        if (!callback || typeof callback !== 'function') {
            throw new TypeError('Insert a callback function into handle request.');
        }

        const ret = await callback();

        if (!ret && allow404) return response.sendStatus(404);

        return response.status(status).json(ret);
    } catch (error) {
        console.error(error);
        return response.status(500).json(error.message);
    }
}

const handleWriteRequest = async (response, callback, status = 200) => {
    return await handleRequest(response, callback, status);
}

const handleReadRequest = async (response, callback, status = 200) => {
    return await handleRequest(response, callback, status, true);
}

export {
    handleReadRequest,
    handleWriteRequest
}