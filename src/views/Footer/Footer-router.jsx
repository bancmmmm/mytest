import { connect } from "react-redux";
import { createFromIconfontCN } from '@ant-design/icons';
import styled from "styled-components";

const Divstyle = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center 
`

const Listyle = styled.li`
  width: 25%;
  height: 60px;
  color: #f03d37;
  position: relative;
  flex: 1;
  width: 100%;
  border-top: .5px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    'https://at.alicdn.com/t/font_2480828_66wqdgjxue5.js?spm=a313x.7781069.1998910419.41&file=font_2480828_66wqdgjxue5.js'
  ],
});

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

function Footer(props) {
  return (
    <Divstyle>
      {props.footerList.map(e => {
        return (
          <Listyle key={e.title}>
            <IconFont type={e.icon} style={{ fontSize: "30px" }} />
            <span>{e.title}</span>
          </Listyle>
        )
      })}
    </Divstyle>
  )
}

export default connect(mapStateToProps)(Footer)
