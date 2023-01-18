const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    list: `${API}/api/${VERSION}/products`,
    create: `${API}/api/${VERSION}/products`,
    get: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    update: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    delete: (id: string) => `${API}/api/${VERSION}/products/${id}`,
  },
  user: {
    list: `${API}/api/${VERSION}/users`,
    create: `${API}/api/${VERSION}/users`,
    get: (id: string) => `${API}/api/${VERSION}/users/${id}`,
    update: (id: string) => `${API}/api/${VERSION}/users/${id}`,
    delete: (id: string) => `${API}/api/${VERSION}/users/${id}`,
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
    get: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    update: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    delete: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    listProducts: (id: string) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    get: (filename: string) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
