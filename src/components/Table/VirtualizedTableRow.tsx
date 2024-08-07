import React from 'react';
import { Row, Cell } from "@table-library/react-table-library/table";
import { DataNode } from './data';

interface VirtualizedTableRowProps {
  item: DataNode;
  index: number;
}

const VirtualizedTableRow: React.FC<VirtualizedTableRowProps> = ({ item, index }) => {
  const cells = [
    index,
    item.name,
    item.deadline.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    item.type,
    item.isComplete.toString(),
    item.nodes?.length,
  ];

  return (
    <Row item={item} key={item.id}>
      {cells.map((cell, cellIndex) => (
        <Cell key={cellIndex}>{cell}</Cell>
      ))}
    </Row>
  );
};

export default VirtualizedTableRow;
