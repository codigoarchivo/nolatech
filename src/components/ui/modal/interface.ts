export interface IModalDelete {
  del: string;
  text: string;
  cancel: string;
  options: string[];
  path: string;
  back?: string;
  change?: string;
  select?: 'change' | 'delete';
}
