import styled from 'styled-components'

export const ListItem = styled.li`
  height: 35%;
  width: 35%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const Button = styled.button`
  height: 150px;
  width: 150px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
