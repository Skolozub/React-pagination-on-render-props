import React from "react";
import { history } from ".";
import { PaginationContainer } from "./containers/pagination-container";
import { ListContainer } from "./for-test/containers/list-container";
import { Pagination } from "./components/pagination";

export const App = () => (
  <>
    {/* with change location */}
    <PaginationContainer location={history.location}>
      {props => (
        <>
          {console.log("app", props)}
          <Pagination {...props} count={7} location={history.location} />
          <ListContainer {...props} />
          <Pagination {...props} count={7} location={history.location} />
        </>
      )}
    </PaginationContainer>
  </>
);
