import './AttendanceQR.scss'

export const AttendanceQR = ({ classId }) => {
  const currentUrl = window.location.href
  const qrUri = `${currentUrl}AttendancePage/${classId}`
  return <div>{qrUri}</div>
}
