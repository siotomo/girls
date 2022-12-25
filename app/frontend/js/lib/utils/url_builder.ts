export const buildGraphqlApiUrl = (): string => {
  return '/api/graphql';
};

export const buildGirlApiUrl = (path: string): string => {
  return `/api/girls/${path}`;
};
