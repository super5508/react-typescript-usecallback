import React from 'react';

interface ListRendererProps {
  onItemClick: (e: any) => void;
  items: string[];
  type: string;
}

const ListRenderer = ({ type, onItemClick, items }: ListRendererProps) => {
  console.log('re render');
  return (
    <div>
      <p>{type}</p>
      <ul>
        {items.map((item) => (
          <li onClick={onItemClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ListRenderer);
