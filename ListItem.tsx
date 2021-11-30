import React, { useCallback, useEffect, useMemo } from 'react';

interface ListItemProps {
  name: string;
  active: boolean;
  onClick?: () => void;
}

const ListItem = ({ name, active, onClick }: ListItemProps) => {
  // const func = useCallback(() => {
  //   console.log('func go here', name);
  // }, [name]);

  const func = () => {
    console.log('func go here', name);
  };

  useEffect(() => {
    console.log('func is recreated');
  }, [func]);

  return (
    <li onClick={onClick}>
      {name} {active && 'active'}
    </li>
  );
};

export default ListItem;
