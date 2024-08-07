import React from "react";
import {
  HeaderRow,
  HeaderCell,
} from "@table-library/react-table-library/table";

const headers = ["Index", "Task", "Deadline", "Type", "Complete", "Tasks"];

const VirtualizedTableHeader: React.FC = () => (
  <HeaderRow>
    {headers.map((header, index) => (
      <HeaderCell key={index}>{header}</HeaderCell>
    ))}
  </HeaderRow>
);

export default VirtualizedTableHeader;
