import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navigation = ()=>(<Nav>
<NavList>
    <NavtItem><Link to="/home">홈</Link></NavtItem>
    <NavtItem><Link to="/join">회원가입</Link></NavtItem>
    <NavtItem><Link to="/login">로그인</Link></NavtItem>
    <NavtItem><Link to="/online-profile">프로필</Link></NavtItem>
    <NavtItem><Link to="/school-status">학교 현황</Link></NavtItem>
    <NavtItem><Link to="/course-register">강좌등록</Link></NavtItem>
</NavList>
</Nav>
)
export default Navigation

const Nav = styled.div`
    width:100%;
    height:30px;
    border-bottom: 1px solid #d1d8e4;
    `

const NavList = styled.ul`
    width:1080px;
    display: flex;
    margin: 0 auto;
`

const NavtItem = styled.li`
    width: 70px auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`

