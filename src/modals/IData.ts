export interface IData {
  id: string;
  title: string;
  status: boolean;
  img: string;
  difficulty: string;
  slug: string;
  component: () => JSX.Element;
}