import React, { Component } from "react";
import axios from "axios";
import { List } from "../components/list";

export class ListContainer extends Component {
  state = {
    list: [],
    isLoading: false
  };

  getList = async () => {
    this.setState({ isLoading: true });

    const { data } = await this.fetchList(this.props.params);

    this.setState({ list: data.results, isLoading: false });
  };

  componentDidMount = () => {
    this.getList();
  };

  componentDidUpdate = prevProps => {
    const { params } = this.props;

    const isParamsChanged = prevProps.params !== params;
    if (isParamsChanged) this.getList();
  };

  fetchList = async params => axios.get("/people", { params });

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}
