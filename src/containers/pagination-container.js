import { Component } from "react";
import { decodeGetParams } from "../functions";

export class PaginationContainer extends Component {
  // -----------------Methods-------------------

  setParams = () => {
    const newParams = this.parseURLParamsAndAddPage();
    this.setState(({ params: prevParams }) => ({
      params: { ...prevParams, ...newParams }
    }));
  };

  parseURLParamsAndAddPage = () => {
    const { location } = this.props;
    const params = decodeGetParams(location.search);

    return { ...params, page: params.page || 1 };
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    this.setParams();
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (paramsHasChanged) this.setParams();
  };

  // -------------------------------------------

  state = {
    params: {}
  };

  render = () => {
    const { params } = this.state;
    const { children } = this.props;

    return children({ params });
  };
}
