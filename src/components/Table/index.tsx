import React from "react";
import { Table, TableNode } from "@table-library/react-table-library/table";
import { Virtualized } from "@table-library/react-table-library/virtualized";
import { Box } from "@mui/material";
import VirtualizedTableHeader from "./VirtualizedTableHeader";
import VirtualizedTableRow from "./VirtualizedTableRow";
import { DataNode } from "./data";

const ROW_HEIGHT = 40;

interface VirtualizedTableProps {
  data: { nodes: DataNode[] };
}

const VirtualizedTable: React.FC<VirtualizedTableProps> = ({ data }) => {
  return (
    <Box sx={{ height: "500px", overflow: "auto" }}>
      <Table data={data} layout={{ isDiv: true, fixedHeader: true }}>
        {(tableList: TableNode[]) => (
          <Virtualized
            tableList={tableList}
            rowHeight={ROW_HEIGHT}
            header={() => <VirtualizedTableHeader />}
            body={(item, index) => (
              <VirtualizedTableRow item={item as DataNode} index={index} />
            )}
          />
        )}
      </Table>
    </Box>
  );
};

export default VirtualizedTable;
