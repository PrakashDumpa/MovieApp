import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MoviesPagination = ({
  handlePageNumber,
  totalPages,
  currentPageNumber,
}) => {
  const onChangePageNumber = (event, value) => {
    // console.log("item,item", event, value);
    handlePageNumber(value);
  };

  // console.log("currentPageNumber", currentPageNumber, totalPages);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Stack>
        <Pagination
          color="info"
          page={currentPageNumber}
          count={totalPages}
          onChange={onChangePageNumber}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default MoviesPagination;
