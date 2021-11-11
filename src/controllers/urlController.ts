import { Request, Response } from 'express';
import shortid from 'shortid';
import { config } from '../constants/constants';
import { URLModel } from '../models/Url';

class UrlController {
  
    public async shortner(req: Request, res: Response):Promise<void> {
    const { originUrl } = req.body;
    const url =  await URLModel.findOne({ originUrl });
    if (url) {
      res.json({url});
      return;
    }
    const hash = shortid.generate();
    const shortUrl = `${config.API_URL}/${hash}`;

    const newUrl = await URLModel.create({originUrl, hash, shortUrl});
    
    res.json({ newUrl });
  }

    public async redirect(req: Request, res: Response):Promise<void> {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });
    if (url) {
      res.redirect(url.originUrl);
      return;
    }
    res.status(404).json({ message: 'Url not found' });
  }

}

export default new UrlController();