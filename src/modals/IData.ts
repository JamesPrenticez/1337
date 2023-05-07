export interface IAlgorithmData {
  id: string;
  title: string;
  img: string;
  difficulty: string;
  slug: string;
  component: () => JSX.Element;
}