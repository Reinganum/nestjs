import { Model } from 'mongoose'

export class MongoRepository<T>{
    private _repository:Model<T>
    constructor(repository:Model<T>){
        this._repository=repository
    }
   async getAll():Promise<T[]>{
    return await this._repository.find().exec();
   }
   async getOneByID(id:string):Promise<T>{
    return await this._repository.findById(id)
   }
   async findOne(prop:object):Promise<any>{
    return await this._repository.findOne(prop)
   }
   async createObject(obj:T):Promise<any>{
    return await this._repository.create(obj)
   }
   async update(id: string, newData: any): Promise<T> {
    return this._repository.findByIdAndUpdate(id, newData);
  }
  async deleteByID(id:string):Promise<T>{
    return await this._repository.findByIdAndDelete(id)
  }
}