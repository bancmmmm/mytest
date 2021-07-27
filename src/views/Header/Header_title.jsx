import styled from "styled-components"

import {
  MenuUnfoldOutlined
} from '@ant-design/icons';

const Divstyle = styled.div`
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  display: flex;
  justify-content: center;
`

const H1 = styled.h1`
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

function Headertitle() {
  return (
    <Divstyle className="header_title">
      <H1>
        猫眼电影
        <MenuUnfoldOutlined style={{
          position: "absolute", top: "50%",
          transform: "translateY(-50%)",
          right: "10px"
        }} />
      </H1>
    </Divstyle>
  )
}
export default Headertitle