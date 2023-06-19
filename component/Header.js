import { Button, Input } from 'antd'
import React from 'react'
// import style from './Header.css'

function Header() {
    const { Search } = Input
    return (
        <div className="wrapper">
            <img src="/logo.svg" alt="logo" />
            <Search
                placeholder="Tìm kiếm"
                //   onSearch={onSearch}
                style={{
        borderRadius: '10px',
                    background: 'red',
                    // padding:'12px 16px',
                    width: 219,
                    height: 22,
                    margin: 'auto',
                }}
            />
        </div>
    )
}

export default Header
