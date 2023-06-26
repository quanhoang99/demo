import {
  AppstoreOutlined,
  CompassOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React from 'react';

function MenuHome() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }
  const items = [
    getItem(
      'Dành cho bạn',
      'sub1',
      <HomeOutlined />
      // [
      //   getItem(
      //     'Item 1',
      //     'g1',
      //     null,
      //     [getItem('Option 1', '1'), getItem('Option 2', '2')],
      //     'group'
      //   ),
      //   getItem(
      //     'Item 2',
      //     'g2',
      //     null,
      //     [getItem('Option 3', '3'), getItem('Option 4', '4')],
      //     'group'
      //   )
      // ]
    ),
    getItem(
      'Dành cho bạn',
      'sub2',
      <TeamOutlined />
      // [
      //   getItem('Option 5', '5'),
      //   getItem('Option 6', '6'),
      //   getItem('Submenu', 'sub3', null, [
      //     getItem('Option 7', '7'),
      //     getItem('Option 8', '8')
      //   ])
      // ]
    ),
    getItem(
      'Khám phá',
      'sub4',
      <CompassOutlined />
      // [
      //   getItem('Option 9', '9'),
      //   getItem('Option 10', '10'),
      //   getItem('Option 11', '11'),
      //   getItem('Option 12', '12')
      // ]
    ),
    getItem(
      'Live',
      'sub5',
      <VideoCameraOutlined />
      // [
      //   getItem('Option 9', '9'),
      //   getItem('Option 10', '10'),
      //   getItem('Option 11', '11'),
      //   getItem('Option 12', '12')
      // ]
    ),
    {
      type: 'divider'
    },
    getItem(
      'Đăng nhập để follow các tác giả, thích video và xem bình luận.',
      'grp',
      null,
      // [getItem('Đăng nhập', '14')],
      null,
      'group'
    )
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Menu
        // onClick={onClick}
        style={{
          width: 256,
          borderRight: 'none',
          borderTop: '1px solid rgb(0 0 0/12%)',
          lineHeight: '30px',
          fontSize: '15px'
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      <Button
        danger
        type="primary"
        onClick={() => setOpenModalLogin(true)}
        ghost
        style={{
          // marginRight: '15px',
          fontSize: '20px',
          border: '1px solid red',
          // padding: '5px 5px',
          // textAlign: 'center',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontStyle: 'bold'
        }}>
        Đăng nhập
      </Button>
    </div>
  );
}

export default MenuHome;
