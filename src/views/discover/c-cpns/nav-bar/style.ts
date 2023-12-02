import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 34px;
  background-color: ${(props) => props.theme.color.primary};

  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    align-items: center;
    .item {
      a {
        display: inline-block;
        color: #fff;
        font-size: 12px;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
