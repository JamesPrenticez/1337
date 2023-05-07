// import TwoNumberSum from '../components/algorithims/TwoNumberSum'
// import { IData } from '../modals/IData'

import TwoNumberSum from "../components/algorithms/TwoNumberSum";

// export const algorithimData: IData[] = [
//   { id: "1", title: "Two Number Sum", difficulty: "easy", img: "", slug: "two-number-sum", component: <TwoNumberSum />},
//   // { id: "2", title: "Closest Value in BST", difficulty: "easy", img: "", slug: "closest-value-in-bst", component: TwoNumberSum},
//   // { id: "3", title: "Branch Sums", difficulty: "easy", img: "", slug: "branch-sums", component: TwoNumberSum},
//   // { id: "4", title: "Depth First Search", difficulty: "easy", img: "", slug: "depth-first-search", component: TwoNumberSum},
//   // { id: "5", title: "Linked List Construction", difficulty: "easy", img: "", slug: "linked-list-construction", component: TwoNumberSum},
//   // { id: "6", title: "Nth Fibonacci", difficulty: "easy", img: "", slug: "nth-fibonacci", component: TwoNumberSum},
//   // { id: "7", title: "Product Sum", difficulty: "easy", img: "", slug: "product-sum", component: TwoNumberSum},
//   // { id: "8", title: "Binary Search", difficulty: "easy", img: "", slug: "binarch-search", component: TwoNumberSum},
//   // { id: "9", title: "Find Three Largest Numbers", difficulty: "easy", img: "", slug: "find-three-larget-numbers", component: TwoNumberSum},
// ]


interface IData {
  id: string;
  title: string;
  difficulty: string;
  img: string;
  slug: string;
  component: () => JSX.Element;
}

export const algorithmData: IData[] = [
  { id: "1", title: "Two Number Sum", difficulty: "easy", img: "", slug: "two-number-sum", component: TwoNumberSum},
];

