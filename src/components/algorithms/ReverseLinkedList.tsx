import React from 'react'
import Collapsible from '../common/Collapsable'

import twoNumberSumHashTablePY from '../../assets/python/twoNumberSum/twoNumberSumHashTable.py?raw';
import twoNumberSumHashTableTS from '../../assets/typescript/twoNumberSum/twoNumberSumHashTable.ts?raw';
import LanguageSelect from '../common/SelectLanguage';

function ReverseLinkedList() {
  return (
    <>
        <h1>Reverse Linked List/String</h1>
        <p>This is question has be come a meme where people joke that if you can't reverse a linked list you cant become a real software engineer</p>
        <p>Reversing a linked list is a popular interview question or atleast a lot of times you will be asked a question that involves reversing a linked list</p>
        
        <p>This task is seemingly trivial yet yourll never really have to do it on the job as a software engineer</p>
        <p>This is an important question and is surprisingly diffucult</p>

        <h1>Understanding the problem</h1>
        <p>You are given a singly linked list. The list consists of nodes where each node has some sort of value property it could be a string or an  interger it doesnt really matter.</p>
        <p>Every node has a "next" property which points to the next value in the list, hence "linked".</p>\
        <p>The last value points to null</p>

        <p>0 &gt; 1 &gt; 2 &gt; 3 &gt; 4 &gt; 5</p>
        <p>5 &lt; 4 &lt; 3 &lt; 2 &lt; 1 &lt; 0</p>

        <p>Protip: When learning this start by ignoring the edge cases.. that is forget about the start and end values and just focus on figuring out how to reverse one value in the list</p>

        <p>Lets start with the 2</p>
        <p>We will call its "p" for pointer</p>
        <p>This is singly linked list which means we only have access to a "next" property and not a "prev" property</p>
        <p>So what we want to do is reassign the p2.next = p1</p>
        <p>0 &gt; 1 &lt; 2 &nbsp; 3 &gt; 4 &gt; 5</p>
        <p>But this poses a isssue.. working left to right we have not erased the pointer for p3 aka the origional p2.next</p>

        <p>The key is we need 3 pointers at any given point in time</p>
        <p>In order to solve this we need to store 3 points p1,p2,p3 and as we move along we just slide these points</p>
              <p>p1 &gt; p2 &gt; p3</p>
        <p>0 &gt; 1 &gt; 2 &gt; 3 &gt; 4 &gt; 5</p>
                      <p>p1 &gt; p2 &gt; p3</p>
        <p>0 &gt; 1 &gt; 2 &gt; 3 &gt; 4 &gt; 5</p>
                            <p>p1 &gt; p2 &gt; p3</p>
        <p>0 &gt; 1 &gt; 2 &gt; 3 &gt; 4 &gt; 5</p>
        <p>Its important to keep in mind that we need to update each pointer in order otherwise we lose the reference to the pervious pointer</p>

        <p>while p2 !== null</p>
        <p>p3=p2.next</p>
        <p>p2.next=pq</p>
        <p>p1=p2</p>
        <p>p2=p3</p>


        <Collapsible title="While Loop Reverse Linked List " time="O(n)" space='O(1)'>
        <h2>Option 1:</h2>
        <p>Pretty simple and clean not a lot of room for improvement</p>
          <LanguageSelect 
            options={[
              { lang: "javascript", algo: twoNumberSumHashTablePY },
              { lang: "python", algo: twoNumberSumHashTableTS },
            ]}
          />
      </Collapsible>
    </>
  )
}

export default ReverseLinkedList