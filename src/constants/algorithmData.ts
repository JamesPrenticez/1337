import { type IData } from "../modals/IData";
import ContainsDuplicate from "../components/algorithms/ContainsDuplicate";
import TwoNumberSum from "../components/algorithms/TwoNumberSum";
import ValidAnagram from "../components/algorithms/ValidAnagram";

export const algorithmData: IData[] = [
  { id: "1", title: "Two Number Sum", status: false, difficulty: "easy", img: "", slug: "two-number-sum", component: TwoNumberSum},
  { id: "2", title: "Contains Duplicate", status: false, difficulty: "easy", img: "", slug: "contains-duplicate", component: ContainsDuplicate},
  { id: "3", title: "Valid Anagram", status: false, difficulty: "easy", img: "", slug: "valid-anagram", component: ValidAnagram},
];