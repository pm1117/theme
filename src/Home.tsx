import {Component} from 'react';
import './Home.css';
import {Layout} from 'antd';
import {SideMenu} from 'view/component/SideMenu';
import TaskManager from 'view/TaskManager';

type HomeState = {
  selectMenuKey: string;
};
export default class Home extends Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.state = {
      selectMenuKey: '1',
    };
  }
  handleClick = (e) => {
    this.setState({selectMenuKey: e.key});
  };
  renderMainContents() {
    if (this.state.selectMenuKey) {
      return <TaskManager />;
    }
    return null;
  }
  render() {
    return (
      <Layout
        style={{minHeight: '100vh', display: 'flex', flexDirection: 'row'}}
      >
        <SideMenu onClick={this.handleClick.bind(this)} />
        <div>{this.renderMainContents()}</div>
      </Layout>
    );
  }
}
