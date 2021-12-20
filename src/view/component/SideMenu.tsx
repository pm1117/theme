import {Menu} from 'antd';
import {CaretRightOutlined, PlusOutlined} from '@ant-design/icons';

export const SideMenu = (props) => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      onClick={props.onClick.bind(this)}
      style={{width: '20%'}}
    >
      <Menu.Item key="1" icon={<CaretRightOutlined />}>
        使ってみる
      </Menu.Item>
      <Menu.Item key="2" icon={<CaretRightOutlined />}>
        クイックメモ
      </Menu.Item>
      <Menu.Item key="3" icon={<CaretRightOutlined />}>
        タスク管理
      </Menu.Item>
      <Menu.Item key="4" icon={<PlusOutlined />}>
        ページを追加する
      </Menu.Item>
    </Menu>
  );
};
