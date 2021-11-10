import { Request, Response } from 'express';
import shortid from 'shortid';
import { config } from '../constants/constants';

class UrlController {
  
    public async shortner(req: Request, res: Response):Promise<void> {
    const { originUrl } = req.body;
    console.log(originUrl);
    const hash = shortid.generate();
    const shortUrl = `${config.API_URL}/${hash}`;
    
    res.json({ originUrl, hash, shortUrl });
  }

    public async redirect(req: Request, res: Response):Promise<void> {
    const { hash } = req.params;
    console.log(hash);
    const url = {
        originUrl: 'https://cloud.mongodb.com/v2/6122db1d8f783a3d155b14fb#clusters/detail/study-cluster/connect?clusterId=study-cluster',
        hash: '4IAeKISts',
        shortUrl: 'http://localhost:3333/4IAeKISts'
      };
    res.redirect(url.originUrl);    
  }

}

export default new UrlController();