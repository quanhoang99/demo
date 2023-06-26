import { Button, Dropdown, Input, Modal, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  AlignLeftOutlined,
  CloudUploadOutlined,
  FontColorsOutlined,
  MoreOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SearchOutlined
} from '@ant-design/icons';
import ModalLogin from './ModalLogin';
// import style from './Header.css'

function Header() {
  const { Search } = Input;
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);
  const handleOk = () => {
    setOpenModalLogin(true);
  };
  const handleCancel = () => {
    setOpenModalLogin(false);
  };
  const resultSearch = [
    {
      key: '1',
      label: searchResult.map(items => (
        // eslint-disable-next-line react/jsx-key
        <button>
          {items}
          <SearchOutlined />
        </button>
      ))
    }
  ];
  const items = [
    {
      key: '1',
      label: (
        <button type="text">
          <FontColorsOutlined />
          Tiếng việt
        </button>
      )
    },
    {
      key: '2',
      label: (
        <button type="text">
          <QuestionCircleOutlined />
          Tiếng việt
        </button>
      )
    },
    {
      key: '3',
      label: (
        <button type="text">
          <AlignLeftOutlined />
          Phím tắt trên bàn phím
        </button>
      )
    },
    {
      key: '4',
      label: (
        <button type="text">
          Phím tắt trên bàn phím
          <Switch
            defaultChecked
            //   onChange={onChange}
          />
        </button>
      )
    }
  ];
  return (
    <div className="wrapper">
      <img src="/logo.svg" alt="logo" />
      <span
        // className="flex justify-center flex-col items-center "
        style={{
          width: '361px',
          height: '46px',
          background: '#f1f1f2',
          borderRadius: '40px',
          //   textAlign: 'center'
          //   margin: 'auto'
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Dropdown
          menu={{
            items
          }}
          trigger={['click']}>
          <SearchCustom
            className="flex justify-center flex-col items-center "
            placeholder="Tìm kiếm"
            allowClear
            // loading
            //   onSearch={onSearch}
            bordered={false}
            //   enterButton={false}
            style={{
              // margin: 'auto',
              // background: '#f1f1f2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50px',
              width: '340px'
              // padding:'12px 16px',
            }}
          />
        </Dropdown>
      </span>
      {/* <CloudUploadOutlined /> */}
      <span
        className="flex items-center"
        style={{
          //  display: 'flex', alignItems: 'center',
          marginRight: '10px'
        }}>
        <Button
          className="flex justify-center items-center   "
          onClick={() => setOpenModalLogin(true)}
          style={{
            border: '1px solid rgba(22, 24, 35, 0.12)',
            padding: '5px 16px',
            marginRight: '20px',
            // textAlign: 'center',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            fontStyle: 'bold'
          }}>
          <PlusOutlined style={{ marginRight: '5px' }} />
          Tải lên
        </Button>
        <Button
          danger
          type="primary"
          onClick={() => setOpenModalLogin(true)}
          className="flex text-center justify-center items-center"
          style={{
            marginRight: '15px',
            border: '1px solid rgba(22, 24, 35, 0.12)',
            padding: '5px 16px',
            textAlign: 'center',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            fontStyle: 'bold'
          }}>
          Đăng nhập
        </Button>
        <Dropdown
          menu={{
            itme
          }}
          placement="bottomRight">
          {/* <Button>bottomRight</Button> */}
          <Button
            type="text"
            htmlType=""
            icon={<MoreOutlined style={{ fontWeight: '800' }} />}
          />
        </Dropdown>
      </span>
      <Modal
        title="Basic Modal"
        open={openModalLogin}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
        <ModalLogin />
      </Modal>
    </div>
  );
}

export default Header;
const SearchCustom = styled(Input.Search)`
  .ant-btn {
    border: none !important;
    background: #f1f1f2 !important;
  }
`;
