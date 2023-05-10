import { buildRoutePath } from "./utils/build-route-path.js";

export const routes = [ 
  {
    method: 'GET',
    path: buildRoutePath('/'),
    handler: (req, res) => {
      res.end('Hello World');
    }
  }
]