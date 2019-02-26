import React from 'react';

export default class CPage extends React.Component {
  componentWillMount() {
    console.log(this.props);
    // 路由传参
    const { match } = this.props;
    console.log(match.params.param);
  }

  render() {
    return (
      <div>C 默认页面</div>
    );
  }
}