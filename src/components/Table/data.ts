import { TableNode } from "@table-library/react-table-library/types/table";

export interface DataNode extends TableNode {
  id: number;
  name: string;
  deadline: Date;
  type: string;
  isComplete: boolean;
  nodes: DataNode[];
}

export const generateManyNodes = (num: number): DataNode[] => {
  return Array.from({ length: num }, (_, i) => ({
    id: i,
    name: `Task ${i}`,
    deadline: new Date(),
    type: i % 2 === 0 ? "Type A" : "Type B",
    isComplete: Math.random() > 0.5,
    nodes: [],
  }));
};
