import React, { type ReactElement } from 'react'
import Collapsible from '../common/Collapsable'
import LanguageSelect from '../common/SelectLanguage'

import containsDuplicateHashSetEarlyExitPY from '../../assets/python/containsDuplicate/containsDuplicateHashSetEarlyExit.py?raw';
import containsDuplicateHashSetEarlyExitTS from '../../assets/typescript/containsDuplicate/containsDuplicateHashSetEarlyExit.ts?raw';

import containsDuplicateHashSetPY from '../../assets/python/containsDuplicate/containsDuplicateHashSet.py?raw';
import containsDuplicateHashSetTS from '../../assets/typescript/containsDuplicate/containsDuplicateHashSet.ts?raw';

import containsDuplicateQuickSortPY from '../../assets/python/containsDuplicate/containsDuplicateQuickSort.py?raw';
import containsDuplicateQuickSortTS from '../../assets/typescript/containsDuplicate/containsDuplicateQuickSort.ts?raw';

import containsDuplicateHeapSortPY from '../../assets/python/containsDuplicate/containsDuplicateHeapSort.py?raw';
import containsDuplicateHeapSortTS from '../../assets/typescript/containsDuplicate/containsDuplicateHeapSort.ts?raw';

import containsDuplicateLinearSearchPY from '../../assets/python/containsDuplicate/containsDuplicateLinearSearch.py?raw';
import containsDuplicateLinearSearchTS from '../../assets/typescript/containsDuplicate/containsDuplicateLinearSearch.ts?raw';

const ContainsDuplicate = (): ReactElement => {
  return (
    <div>
      <h1>ContainsDuplicate</h1>
      <p>Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.</p>

      <b>Example 1:</b>
      <blockquote>
        <b>Input:</b><span>nums = [1, 1, 3, 4]</span>
        <b>Output:</b><span>true</span>
      </blockquote>

      <b>Example 2:</b>
      <blockquote>
        <b>Input:</b><span>nums = [1, 2, 3, 4]</span>
        <b>Output:</b><span>false</span>
      </blockquote>

      <b>Example 3:</b>
      <blockquote>
        <b>Input:</b><span>nums = [1,1,1,3,3,4,3,2,4,2]</span>
        <b>Output:</b><span>false</span>
      </blockquote>

      {/* Hash Set Early Exit - Linear Search */}
      <Collapsible title='Hash Set Early Exit - Contains Duplicate' time='O(n)' space='O(n)'>
        <h1>Explanation:</h1>
        <p></p>

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: containsDuplicateHashSetEarlyExitTS },
            { lang: "python", algo: containsDuplicateHashSetEarlyExitPY },
          ]}
        />
        
      </Collapsible>

      {/* Hash Set - Linear Search */}
      <Collapsible title='Hash Set - Contains Duplicate' time='O(n)' space='O(n)'>
        <h1>Explanation:</h1>
        <p></p>

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: containsDuplicateHashSetTS },
            { lang: "python", algo: containsDuplicateHashSetPY },
          ]}
        />
        
      </Collapsible>

      {/* Heap Sort & Quick Sort */}
      <Collapsible title='Heap Sort & Quick Sort - Contains Duplicate' time='O(N * log(N)) | Space O(1)' space='O(1) | O(log(N))'>
        <h1>Explanation:</h1>
        <p>We can sort the array first</p>
        <p>How does this help us?</p>
        <p>All consecutive number will be placed next to each other</p>
        <p>Therefore we only need to compare each number to its neighbour not all other numbers in the array</p>

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: containsDuplicateHeapSortTS },
            { lang: "python", algo: containsDuplicateHeapSortPY },
          ]}
        />

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: containsDuplicateQuickSortTS },
            { lang: "python", algo: containsDuplicateQuickSortPY },
          ]}
        />
        
      </Collapsible>

      {/* Brute Force - Linear Search */}
      <Collapsible title='Brute Force - Linear Search - Contains Duplicate' time='O(n^2)' space='O(1)'>
        <h1>Explanation:</h1>
        <p>We can work through the array and compear each number to every other number</p>

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: containsDuplicateLinearSearchTS },
            { lang: "python", algo: containsDuplicateLinearSearchPY },
          ]}
        />
        
      </Collapsible>
    </div>
  )
}

export default ContainsDuplicate