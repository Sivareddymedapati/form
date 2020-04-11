import React, { useContext } from "react";
import { DataListContext } from "../Context/DataListContext";
import DataOutput from "./DataOutput";

const DataList = () => {
  const { Data } = useContext(DataListContext);

  return (
    <div>
      {Data.length ? (
        <ul className="list">
          {Data.map(task => {
            return <DataOutput task = {task} key={task.id} />;
            })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default DataList;
