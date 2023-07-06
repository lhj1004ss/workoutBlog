import { Alert } from 'antd'
const AlertMsg = (errorMsg, type) => {
  return <Alert message={errorMsg} type={type} showIcon />
}
export default AlertMsg
