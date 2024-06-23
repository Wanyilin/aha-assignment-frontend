import { createServer, Model, Response } from 'miragejs';
import { User } from 'types/api';
import { mockUserData, mockTagData } from './mockData';

export function makeServer({ environment = 'developer' } = {}) {

  return createServer({
    environment,
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    seeds(server) {
      mockUserData.data.forEach((user) => {
        server.create('user', user);
      });
      mockTagData.forEach((tag) => {
        server.create('tag', tag);
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users/all', (schema) => {
        const users = schema.all('user').models;

        return new Response(
          200,
          { 'Content-Type': 'application/json' },
          {
            total: mockUserData.total,
            totalPages: mockUserData.totalPages,
            page: mockUserData.page,
            pageSize: mockUserData.pageSize,
            data: users,
          },
        );
      });

      this.post('/results', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.create('result', attrs);
      });

      this.get('/tags', (schema) => {
        const tags = schema.all('tag').models;
        return new Response(
          200,
          { 'Content-Type': 'application/json' },
          tags,
        );
      });
    },
  });
}
