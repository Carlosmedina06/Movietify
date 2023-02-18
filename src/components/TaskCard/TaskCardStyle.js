import styled from 'styled-components/native'

export const TaskContainer = styled.View`
  width: 90%;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  padding-bottom: 20px;
  margin: 20px;
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
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  text-decoration-line: ${(props) => (props.completed ? 'line-through' : 'none')};
`

export const TaskCardBody = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
export const TaskCardItem = styled.View`
  justify-content: center;
  align-items: center;
  background: #e4e9f6;
  border-radius: 10px;
  width: 30%;
  height: 50px;
  margin: 10px;
`

export const TaskCardItemText = styled.Text`
  font-size: 12px;
  color: #050c31;
  margin-bottom: 5px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  text-decoration-line: ${(props) => (props.completed ? 'line-through' : 'none')};
`

export const TaskCardFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`

export const TaskCardButton = styled.TouchableOpacity`
  width: 40%;
  height: 30px;
  background: ${(props) => (props.primary ? '#050c31' : '#E4E9F6')};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`
export const TaskCardButtonText = styled.Text`
  color: ${(props) => (props.primary ? '#050c31' : '#ffffff')};
  font-weight: bold;
`
