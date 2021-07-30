import React from 'react';
import { connect } from 'react-redux';

import { setPageInfo } from '../../../actions/UserActions';
import HelloworldView from '../../views/homepage/Helloworld';

@connect((store) => ({
  pageInfo: store.mainReducer.pageInfo
}))

class HelloworldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setPageTitle = this.setPageTitle.bind(this);
  }

  setPageTitle() {
    const { dispatch } = this.props;
    dispatch(setPageInfo({ title: 'Redux Store Title - React-Redux Hello world!!' }));
  }

  render() {
    const { pageInfo } = this.props;
    return (
      <HelloworldView pageInfo={pageInfo} setPageTitle={this.setPageTitle} />
    );
  }
}

export default HelloworldComponent;
