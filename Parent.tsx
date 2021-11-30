import React, { useCallback } from 'react';
import ListRenderer from './ListRenderer';

const mockItems = new Array(1000).fill('').map((_, i) => i.toString());

interface ParentProps {
  type: string;
  anotherType: string;
}

const Parent = ({ type, anotherType }: ParentProps) => {
  const onItemClick = useCallback(
    (event) => {
      console.log('You clicked ', event.currentTarget);
    },
    [type]
  );
  // const onItemClick = (event) => {
  //   console.log('You clicked ', event.currentTarget);
  // };

  return (
    <div>
      <p>{anotherType}</p>
      <ListRenderer type={type} onItemClick={onItemClick} items={mockItems} />
    </div>
  );
};

export default Parent;
