import { httpRequest } from "../helpers/httpRequest";

export class CatalogService {
    
    getAllCategorys():any{
       return httpRequest('/Catalog/Categories','get','',false)
    }
}