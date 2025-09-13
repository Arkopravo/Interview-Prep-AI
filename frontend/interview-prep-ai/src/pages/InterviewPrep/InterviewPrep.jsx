import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import {AnimatePresence, motion} from "framer-motion"
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu'
import SpinnerLoader from '../../components/Loader/SpinnerLoader'
import {toast} from "react-hot-toast"
import DashboardLayout from '../../components/layouts/DashboardLayout'

const InterviewPrep = () => {

  const {sessionId} = useParams();
  
  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLearnMoreDrawer, setOpenLearnMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  const fetchSessionDetailsById = async () => {};

  const generateConceptExplanation = async () => {};

  const toggleQuestionPinStatus = async (questionId) => {};

  const uploadMoreQuestions = async () => {};

  useEffect(() => {
    if(sessionId) {
      fetchSessionDetailsById();
    }

    return () => {};
  }, []);
 
  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ""}
        topicsToFocus={sessionData?.topicsToFocus || ""}
        experience={sessionData?.experience || "-"}
        questions={sessionData?.questions?.length || "-"}
        description={sessionData?.description || ""}
        lastUpdated={
          sessionData?.updatedAt ? moment(sessionData.updatedAt).format("Do MMM YYYY") : ""
        }
      />
    </DashboardLayout>
  )
}

export default InterviewPrep