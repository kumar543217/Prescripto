import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null)
  console.log(docInfo);

  const fetchDocInfo = async => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo);
    
    
  }


  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId])


  return (
    <div>
      appointemnt
    </div>
  )
}

export default Appointment
