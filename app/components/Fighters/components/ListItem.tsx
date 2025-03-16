import React, { Dispatch, SetStateAction } from "react";
import { fighterItem } from "../fighterList";
import Glove from "./Glove";

interface ListItemProps {
  item: fighterItem;
  selected: fighterItem;
  setSelected: Dispatch<SetStateAction<fighterItem>>;
}

const ListItem: React.FC<ListItemProps> = ({ item, selected, setSelected }) => {
  const defineClass = () => {
    const classname = "w-fit cursor-pointer text-lg xl:text-2xl";
    if (item.id === selected.id) return classname + " font-bold";
    return classname;
  };

  return (
    <div className="relative">
      {(item.name === selected.vs || item.id === selected.id) && <Glove />}
      <h1 className={defineClass()} onMouseDown={() => setSelected(item)}>
        {item.name}
      </h1>
    </div>
  );
};

export default ListItem;
