import './Home.scss'
import { AttendanceQR } from '../../components/AttendanceQR/AttendanceQR'
import { AttendanceRecords } from '../../components/AttendanceRecords/AttendanceRecords'

export const Home = () => {
  const classId = crypto.randomUUID()
  //TODO: send classID, save classKey, send it to AttendanceRecords
  const classKey = "X"
  return (
    <div className="home">
      <AttendanceQR classId={classId} />
      <AttendanceRecords classKey={classKey} />
    </div>
  )
}
