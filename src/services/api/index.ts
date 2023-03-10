const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    list: (limit: number, offset: number) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    create: `${API}/api/${VERSION}/products`,
    get: (id: number) => `${API}/api/${VERSION}/products/${id}`,
    update: (id: number) => `${API}/api/${VERSION}/products/${id}`,
    delete: (id: number) => `${API}/api/${VERSION}/products/${id}`,
  },
  user: {
    list: (limit: number) => `${API}/api/${VERSION}/users?limit=${limit}`,
    create: `${API}/api/${VERSION}/users`,
    get: (id: number) => `${API}/api/${VERSION}/users/${id}`,
    update: (id: number) => `${API}/api/${VERSION}/users/${id}`,
    delete: (id: number) => `${API}/api/${VERSION}/users/${id}`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refreshToken: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  categories: {
    list: `${API}/api/${VERSION}/categories`,
    create: `${API}/api/${VERSION}/categories`,
    get: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
    update: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
    delete: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
    listProducts: (id: number) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    get: (filename: string) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
