export const API_URL = 'https://api.visaro.ng/api/v2';

export type APIResponse<T = any> = {
  code: string;
  message: string;
  status: boolean;
  success: boolean;
  errors?: Record<string, any>;
  data?: T;
  [key: string]: any;
};

export class APIError extends Error {
  public validationErrors: Record<string, string[]>;

  constructor(message: string, validationErrors: Record<string, string[]>) {
    super(message);
    this.name = 'APIError';
    this.validationErrors = validationErrors;
    Object.setPrototypeOf(this, APIError.prototype);
  }
}

export const get = async (
  uri: string,
  options?: Omit<RequestInit, 'method' | 'url'> & {
    byPassStatus?: boolean;
  },
) => {
  const response = await fetch(uri, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) {
    throw new Error(((await response.json()) as APIResponse).message);
  }

  const data = (await response.json()) as APIResponse;

  if (options?.byPassStatus) {
    return data;
  }

  if (!data.status) {
    if (data.errors) {
      // Throw a custom error object with both the message and validation errors
      throw new APIError(data.message, data.errors);
    } else {
      throw new Error(data.message);
    }
  }

  return data;
};

export const post = async (
  uri: string,
  body?: Record<any, any>,
  options?: Omit<RequestInit, 'method' | 'url'>,
) => {
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body || {}),
    ...options,
  });

  if (!response.ok) {
    throw new Error(((await response.json()) as APIResponse).message);
  }

  const data = (await response.json()) as APIResponse;

  if (!data.status) {
    if (data.errors) {
      // Throw a custom error object with both the message and validation errors
      throw new APIError(data.message, data.errors);
    } else {
      throw new Error(data.message);
    }
  }

  return data;
};

export const postFormData = async (
  uri: string,
  body?: FormData,
  options?: Omit<RequestInit, 'method' | 'url'>,
) => {
  const response = await fetch(uri, {
    method: 'POST',

    body: body,
    ...options,
  });

  if (!response.ok) {
    throw new Error(((await response.json()) as APIResponse).message);
  }

  const data = (await response.json()) as APIResponse;

  if (!data.status) {
    if (data.errors) {
      // Throw a custom error object with both the message and validation errors
      throw new APIError(data.message, data.errors);
    } else {
      throw new Error(data.message);
    }
  }

  return data;
};
