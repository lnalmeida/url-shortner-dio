import mongoose from 'mongoose';

import {config} from '../constants/constants';

class MongoConnection {

    public async connect(): Promise<void> {
       try {
           await mongoose.connect(config.MONGODB_URI, { 
               useNewUrlParser: true, 
               useUnifiedTopology: true 
           });
           console.log('MongoDB Connected');
       } catch (error: any) {
           console.log(error.message);
           return process.exit(1);           
       }
       
    }
}

export default MongoConnection;



