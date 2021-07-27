import styled from "styled-components"

const Divstyle = styled.div`
  position: relative;
  height: 60px;
  background-color: #fff;
  width: 100%;
  z-index: 11;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  left: 0;
  top: 0;
  top: constant(safe-area-inset-top);
  top: env(safe-area-inset-top);
  border-bottom: 1px solid #e8e8e8;
  padding: 0 10px;
`

const Ulstyle = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 16px;
`

function HeaderMain() {
  return (
    <Divstyle>
      <img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png" alt="" style={{ width: "94px", height: "40px" }} />
      <Ulstyle>
        <a href="./">发现最新最热电影</a>
        <li href="#">丨</li>
        <a href="./">打开App</a>
      </Ulstyle>
    </Divstyle>
  )
}

export default HeaderMain