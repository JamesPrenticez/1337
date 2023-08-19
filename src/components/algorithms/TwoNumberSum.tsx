import React, { useState, type ReactElement } from 'react'
import { motion } from 'framer-motion';
import Collapsible from '../common/Collapsable';

import LanguageSelect from '../common/SelectLanguage';

import { twoNumberSumHashTable } from '../../assets/typescript/twoNumberSum/twoNumberSumHashTable.ts'

import twoNumberSumNestedLoopTS from '../../assets/typescript/twoNumberSum/twoNumberSumNestedLoop.ts?raw';
import twoNumberSumNestedLoopPY from '../../assets/python/twoNumberSum/twoNumberSumNestedLoop.py?raw';

import twoNumberSumSortedLoopTS from '../../assets/typescript/twoNumberSum/twoNumberSumSortedLoop.ts?raw';
import twoNumberSumSortedLoopPY from '../../assets/python/twoNumberSum/twoNumberSumSortedLoop.py?raw';

import twoNumberSumHashTablePY from '../../assets/python/twoNumberSum/twoNumberSumHashTable.py?raw';
import twoNumberSumHashTableTS from '../../assets/typescript/twoNumberSum/twoNumberSumHashTable.ts?raw';


const TwoNumberSum = (): ReactElement => {

  return (
    <div>
      <h1>Two Number Sum</h1>
      <a href="https://leetcode.com/problems/two-sum/" target='blank'>https://leetcode.com/problems/two-sum/</a>

      <h2>Explanation:</h2>
      <p>This problem gives us an array of distinct numbers meaning no number is repeated and it also gives another interger the represents a target sum. The goal is then to write a function that searches the array and determines whether or not there is a pair of numbers the sums together to match the target interger.</p>

      <h2>Example:</h2>
      <p>[3, 5, -4, 8, 11, -1, 6], 10</p>
      <p>The answer we are looking for is 11 + -1 = 10</p>

      <h2>Related Problems:</h2>
      <ul>
        <li>3 number sum</li>
        <li>4 number sum</li>
      </ul>

      <h2>Animaiton:</h2>
      <AnimationTwoNumberSum />

      {/* Hash Table */}
      <Collapsible title='Hash Map - Two Number Sum' time='O(n)' space='O(n)'>
      <h2>Option 3:</h2>
        <p>The best option is to use a hash table which can be represented as a javascript object or a python dictionary</p>
        <p>This will require extra space but will make our algorithm faster</p>
        <p>TargetSum = 10</p>
        <p>CurrentNum = x</p>
        <p>Answer = y</p>
        <p>x + y = 10</p>
        <p>y = 10 - x</p>


        <LanguageSelect 
          options={[
            { lang: "javascript", algo: twoNumberSumHashTableTS },
            { lang: "python", algo: twoNumberSumHashTablePY },
          ]}
        />

        
      </Collapsible>

      {/* Sorted For Loop */}
      <Collapsible title='Sorted Nested For Loop - Two Number Sum' time='O(n log(n)' space='O(1)'>
        <h2>Option 2 :</h2>
          <p>We could sort the array first</p>
          <p>[-4, -1, 3, 5, 6, 8, 11], 10</p>
          <p>Then we could establish a Left pointer at -4 and a Right pointer at 11</p>
          <p>[<b>-4</b>, -1, 3, 5, 6, 8, <b>11</b>]</p>
          <p>And then sum those two numbers -4 + 11 = 7</p>
          <p>Which is less than 10 our target sum. So now we know to move the Left pointer inward allowing us to have a greater sum</p>
          <p>[-4, <b>-1</b>,3, 5, 6, 8, <b>11</b>]</p>
          <p>-1 + 11 = 10</p>
          <p>Lets change the target to be 13 to make things more interesting</p>
          <p>[-4, -1, <b>3</b>, 5, 6, 8, <b>11</b>]</p>
          <p>3 + 11 = 14 this is greater than out target so we move the right pointer instead</p>
          <p>[-4, -1, <b>3</b>, 5, 6, <b>8</b>, 11]</p>
          <p>3 + 8 = 11 is less than the target sum so that means we more the left pointer again </p>
          <p>[-4, -1, 3, <b>5</b>, 6, <b>8</b>, 11]</p>
          <p>5 + 8 = 13 </p>

          <LanguageSelect 
          options={[
            { lang: "javascript", algo: twoNumberSumSortedLoopTS },
            { lang: "python", algo: twoNumberSumSortedLoopPY },
          ]}
        />


      </Collapsible>

      {/* Nested For Loop */}
      <Collapsible title='Nested For Loop - Two Number Sum' time='O(n^2)' space='O(1)'>
        {/* Explanation */}
        <h2>How it works:</h2>
        <p>We traverse the first array and every index we also traverse the secound array and check the sum. However, this is slow.</p>

        <LanguageSelect 
          options={[
            { lang: "javascript", algo: twoNumberSumNestedLoopTS },
            { lang: "python", algo: twoNumberSumNestedLoopPY },
          ]}
        />

      </Collapsible>

    </div>
  )
}

const AnimationTwoNumberSum = (): ReactElement => {
  const [result, setResult] = useState([]);
  const [animations, setAnimations] = useState([]);

  const array = [2, 8, 11, 15, 5, 5, 8, 7];
  const target = 9;

  const animateSearch = (): void => {
    const nums = {};
    const newAnimations = [];

    const animateStep = (i: number) => {
      if (i >= array.length) {
        setResult([]);
        setAnimations(newAnimations);
        return;
      }

      const potentialMatch = target - array[i];
      newAnimations.push(i); // Add index to animate

      if (nums[potentialMatch]) {
        setResult([potentialMatch, array[i]]);
        setAnimations(newAnimations);
        return;
      } else {
        nums[array[i]] = true;
        setAnimations(newAnimations);
      }

      setTimeout(() => {
        animateStep(i + 1);
      }, 1000); // Adjust the delay (in milliseconds) to your desired animation speed
    };

    animateStep(0);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={animateSearch}
      >
        Animate Search
      </button>
      <div className="flex mt-4">
        {array.map((num, index) => (
          <motion.div
            key={index}
            className={`w-10 h-10 flex items-center justify-center border m-1 ${
              animations.includes(index) ? 'bg-green-500 text-white' : ''
            }`}
          >
            {num}
          </motion.div>
        ))}
      </div>
      {result.length > 0 && (
        <div className="mt-4">
          Result: {result[0]} + {result[1]} = {target}
        </div>
      )}
    </div>
  );
};
  
export default TwoNumberSum