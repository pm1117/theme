import {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {Board} from './component/Board';

export default class TaskManager extends Component {
  renderDropMenu() {
    return (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            ビューの追加
          </a>
        </Menu.Item>
        <Menu.Item icon={<DownOutlined />} disabled>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item disabled>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <div style={{width: '80%', margin: '0 auto'}}>
        <h2>タスク管理</h2>
        <Dropdown overlay={this.renderDropMenu()} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
        <div style={{margin: '20px auto', border: '1px solid gray'}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Board droppableId="droppable1" title="未着手" />
          <Board droppableId="droppable2" title="対応中" />
          <Board droppableId="droppable3" title="完了" />
        </div>
      </div>
    );
  }
}
