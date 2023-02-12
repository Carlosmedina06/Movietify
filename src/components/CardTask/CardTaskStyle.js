import styled from 'styled-components/native'

export const TaskCard = styled.View`
  width: 90%;
  height: 250px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
`
export const TaskCardHeader = styled.View`
  width: 100%;
  color: #050c31;
  padding: 20px;
`
export const TaskCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #050c31;
  margin-left: 20px;
  word-wrap: break-word;
`

export const TaskCardBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TaskCardDescription = styled.ScrollView`
  width: 70%;
  height: 190px;
  background: #e4e9f6;
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
`

export const TaskCardButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 10px;
`
