import React, { type ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Collapsible from '../common/Collapsable';

import LanguageSelect from '../common/SelectLanguage';

// import twoNumberSumNestedLoopPY from '../../assets/python/twoNumberSum/twoNumberSumHashTable?raw'

import twoNumberSumNestedLoopPY from '../../assets/python/twoNumberSum/twoNumberSumNestedLoop.py?raw';
import twoNumberSumNestedLoopTS from '../../assets/typescript/twoNumberSum/twoNumberSumNestedLoop.ts?raw';

import twoNumberSumHashTablePY from '../../assets/python/twoNumberSum/twoNumberSumHashTable.py?raw';
import twoNumberSumHashTableTS from '../../assets/typescript/twoNumberSum/twoNumberSumHashTable.ts?raw';


const TwoNumberSum = (): ReactElement => {
  console.log(twoNumberSumNestedLoopPY)
  // const [option1Answer, setOption1Answer] = useState("")
  // const [array, setArray] = useState('[3, 5, -4, 8, 11, -1, 6]')
  // const [target, setTarget] = useState(10)

  return (
    <div>
      <h1>Two Number Sum</h1>
      <a href="https://leetcode.com/problems/two-sum/" target='blank'>https://leetcode.com/problems/two-sum/</a>


      <h2>Explanation:</h2>
      <p>This problem gives us an array of distinct numbers (meaning no number is repeated) and it also gives another interger the represents a target sum. The goal is then to write a function that searches the array and determines whether or not there is a pair of numbers the sums together to match the target interger.</p>

      <h2>Example:</h2>
      <p>[3, 5, -4, 8, 11, -1, 6], 10</p>
      <p>The answer we are looking for is 11 + -1 = 10</p>

      <h2>Related Problems:</h2>
      <ul>
        <li>3 number sum</li>
        <li>4 number sum</li>
      </ul>

      <h2>Animaiton:</h2>
      {/* <div className='p-3 text-3xl space-x-2'>
          <input className="p-1 outline-none" placeholder="3, 5, -4, 8, 11, -1, 6" onChange={(e) => setArray("[" + e.target.value + "]")}/>
          <input className="p-1 outline-none" placeholder={target} onChange={(e) => setTarget(e.target.value)}/>
          <button className="p-1 bg-green-600 rounded" onClick={() => {setOption1Answer(option1(array, target))}}>Run</button>
          <p className='inline'>{option1Answer}</p>
        </div>

        <div className='max-w-7xl mx-auto my-5 h-[3px] bg-gradient-to-r from-gray-50 via-green-600 to-gray-50'></div> */}

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

        {/* Code */}
        <SyntaxHighlighter language="javascript" style={docco}>
          {` 

          `}
        </SyntaxHighlighter>


        
      </Collapsible>

      {/* Sorted Nested For Loop */}
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
      </Collapsible>

      {/* Nested For Loop */}
      <Collapsible title='Nested For Loop - Two Number Sum' time='O(n^2)' space='O(1)'>
        {/* Explanation */}
        <h2>How it works:</h2>
        <p>We traverse the first array and every index we also traverse the secound array and check the sum. However, this is slow.</p>

        {/* Code */}
        {/* <SyntaxHighlighter language="javascript" style={docco}>
          {twoNumberSumNestedLoopTextTS}
        </SyntaxHighlighter> */}

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
  
export default TwoNumberSum