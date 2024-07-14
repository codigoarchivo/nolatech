
export type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface CE {
  response?: {
    data: Record<string, unknown> | undefined;
  };
}

