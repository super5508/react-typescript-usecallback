import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

interface ListRendererProps {
  onItemClick: (e: any) => void;
  items: string[];
  type: string;
}

const ListRenderer = ({ type, onItemClick, items }: ListRendererProps) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <p>{type}</p>
      <ul>
        {items.map((item, index) => (
          <ListItem
            onClick={() => setActive(index)}
            key={item}
            name={item}
            active={index === active}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
};

export default ListRenderer;
