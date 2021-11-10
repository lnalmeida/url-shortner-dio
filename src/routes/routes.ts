import { Router } from 'express';
import UrlController from '../controllers/urlController';

const router = Router();

router.get('/teste', (req, res) => {res.status(200).send('Routes OK')} );

router.post('/shortner', UrlController.shortner);
router.get('/:hash', UrlController.redirect);

export default router;