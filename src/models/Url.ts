import { prop, Typegoose } from 'typegoose';

export interface UrlInterface extends Document {
  originUrl:string;
  hash:string;
  shortUrl:string;
  createdAt:Date;
}

class URL extends Typegoose {//#endregion
    
    @prop({required:true})
    hash: string;
    
    @prop({required:true})
    originUrl: string;

    @prop({ required: true })
    shortUrl: string;
    
};

export const URLModel = new URL().getModelForClass(URL);