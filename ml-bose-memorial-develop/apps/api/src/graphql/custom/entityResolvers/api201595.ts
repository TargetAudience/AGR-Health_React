import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTelephone extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add Telephone
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('telephone', entity);

    // Sample HTTP POST request.
    // return this.post('telephone', entity);
  }

  // Delete Telephone
  async deleteEntity(id: string) {
    return KapiCrud.delete('telephone', id);

    // Sample HTTP DELETE request.
    // return this.delete(`telephone/${id}`);
  }

  // List Telephone
  async listEntity(params: any) {
    return KapiCrud.list('telephone', params);

    // Sample HTTP GET request.
    // return this.get('telephone', params);
  }

  // Get Telephone
  async getEntity(id: string) {
    return KapiCrud.get('telephone', id);

    // Sample HTTP GET request.
    // return this.get(`telephone/${id}`);
  }

  // Update Telephone
  async updateEntity(entity) {
    return KapiCrud.update('telephone', entity);

    // Sample HTTP PATCH request.
    // return this.patch(telephone, entity);
  }

  // Auto complete for Telephone
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('telephone');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.telephone }));
  }
}
