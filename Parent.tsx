import React, { useCallback, useEffect } from 'react';
import ListRenderer from './ListRenderer';

const mockItems = new Array(1000).fill('').map((_, i) => i.toString());

interface ParentProps {
  type: string;
  anotherType: string;
  type1: string;
  type2: string;
  type3: string;
  type4: string;
  type5: string;
  type6: string;
  type7: string;
}

const Parent = ({ type, anotherType }: ParentProps) => {
  const onItemClick = useCallback(
    (event) => {
      console.log('You clicked ', event.currentTarget, type);
    },
    [type]
  );

  // const onItemClick = (event) => {
  //   console.log('You clicked ', event.currentTarget);
  // };

  useEffect(() => {
    console.log('On Item Click is recreated');
  }, [onItemClick]);

  return (
    <div>
      <p>{anotherType}</p>
      <ListRenderer type={type} onItemClick={onItemClick} items={mockItems} />
    </div>
  );
};

export default Parent;
