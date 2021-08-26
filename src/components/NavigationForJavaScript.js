import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavigationForJavaScript = ()=>(<Nav>
    <NavList>
        <NavtItem><Link to="/basic">basic</Link></NavtItem>
        <NavtItem><Link to="/arrow">arrow</Link></NavtItem>
        <NavtItem><Link to="/arguments">arguments</Link></NavtItem>
        <NavtItem><Link to="/template-literal">template-literal</Link></NavtItem>
        <NavtItem><Link to="/literal-method">literal-method</Link></NavtItem>
        <NavtItem><Link to="/destructuring">destructuring</Link></NavtItem>
        <NavtItem><Link to="/loop">loop</Link></NavtItem>
        <NavtItem><Link to="/array-method">array-method</Link></NavtItem>
        <NavtItem><Link to="/spread-operator-rest-parameter">spread</Link></NavtItem>
        <NavtItem><Link to="/object-literal">object</Link></NavtItem>
        <NavtItem><Link to="/symbol">symbol</Link></NavtItem>
        <NavtItem><Link to="/class"></Link></NavtItem>
        <NavtItem><Link to="/promise"></Link></NavtItem>
        <NavtItem><Link to="/generator"></Link></NavtItem>
        <NavtItem><Link to="/proxy"></Link></NavtItem>
        <NavtItem><Link to="/set-map"></Link></NavtItem>
        <NavtItem><Link to="/array">array</Link></NavtItem>
        <NavtItem><Link to="/es2017">es2017</Link></NavtItem>
        <NavtItem><Link to="/async-await"></Link></NavtItem>
        <NavtItem><Link to="/es2018"></Link></NavtItem>
        <NavtItem><Link to="/es2019"></Link></NavtItem>
        <NavtItem><Link to="/es2020"></Link></NavtItem>
        <NavtItem><Link to="/typescript"></Link></NavtItem>
        
    </NavList>
    </Nav>
    )
    
    export default NavigationForJavaScript
    
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
        width: auto;
        margin-left: 10px;
        margin-top: 5px;
        display: flex;
    `