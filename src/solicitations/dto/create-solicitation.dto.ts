export type CreateSolicitationDto = {
  id?: string;
  userId: string;
  productName: string;
  category: string;
  userCpf: string;
  tracking?: number;
  address: string;
};
