import styled from 'styled-components'
import logopic from '../static/logo.png';
export const HeaderWrapper=styled.div`
height:56px;
border-bottom:1px solid black;
position:relative;
`;
export const Logo=styled.a.attrs({
    href:'/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:100px;
background:url(${logopic}) no-repeat;
background-size:contain;
`;
export const Nav=styled.div`
width:900px;
height:100%;
margin:0 auto;
`;
export const NavItem=styled.div`
height:100%;
line-height:56px;
padding-left:15px;
font-size:17px;
color:#333;
&.left{
float:left;
}
&.active{
color: #ea6f5a;
}
&.right{
float:right;
}
`;
export const SearchWrapper=styled.div`
position:relative;
float:left;
.iconfont{
position:absolute;
right:38px;
top:15px;
width:30px;
line-height:30px;
border-radius:15px;
text-align:center;
&.focused{
background:#999;
}
}
`;
export const SearchInfo=styled.div`
width:355px;
height:150px;
float:left;
position:relative;
top:2px;
left:30%;
border:1px solid #999;
background:#eee;
`;
export const SearchTitle=styled.div`
width:100%;
height:40px;
font-size:15px;
line-height:30px;
box-sizing:border-box;
text-align:center;
padding-left:10px;
padding-top:10px;
`;
export const SearchSwitch=styled.span`
cursor:pointer;
display:block;
float:right;
.iconfont{
display:block;
margin-right:2px;
float:left;
}
.spin{
transition:all 0.2s linear;
transform-origin: 50% 50%;
}
`;
export const SearchSpan=styled.a`
display:block;
width:60px;
height:20px;
text-align:center;
border:1px #666 solid;
margin-left:10px;
margin-top:20px;
float:left;
border-radius:10px;
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
width:255px;
height:38px;
margin:9px 20px;
border-radius:19px;
box-sizing: border-box;
background:#eee;
font-size:14px;
outline:none;
border:none;
padding:0 20px;
&::placeholder{
color:#999
};
&.focused{
width:355px;
}
&.slide-enter{
transition:all .3s ease-out;
}
&.slide-enter-active{
width:355px;
}
&.slide-exit{
transition:all .5s ease-in;
}
&.slide-exit-active{
width:255px;
}
`;
export const Addition=styled.div`
position:absolute;
top:0;
right:0;
height:100%;
`;
export const Button=styled.div`
text-align:center;
width:120px;
height:38px;
line-height:38px;
padding-left:5px;
float:right;
margin:9px 20px;
border:1px solid #ea6f5a;
box-sizing: border-box;
border-radius: 20px;
font-size: 15px;
&.writing{
background-color:#ea6f5a;
} 
`;
