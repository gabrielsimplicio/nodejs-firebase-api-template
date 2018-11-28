import express from 'express';
import { handleReadRequest, handleWriteRequest } from '../utils/handle-request';
import { personController } from '../controllers';

const router = express.Router();

router.get('/', async (req, res) => await handleReadRequest(res, async () => {
    return await personController.getAll();
}));

router.get('/:id', async (req, res) => await handleReadRequest(res, async () => {
    return await personController.getById(req.params.id);
}));

router.post('/', async (req, res) => await handleWriteRequest(res, async () => {
    return await personController.create(req.body);
}, 201));

router.put('/:id', async (req, res) => await handleWriteRequest(res, async () => {
    return await personController.update(req.params.id, req.body);
}));

router.delete('/:id', async (req, res) => await handleWriteRequest(res, async () => {
    return await personController.delete(req.params.id);
}));

export default router;