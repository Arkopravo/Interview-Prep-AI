import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import {AnimatePresence, motion} from "framer-motion"
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu'
import SpinnerLoader from '../../components/Loader/SpinnerLoader'
import {toast} from "react-hot-toast"
import DashboardLayout from '../../components/layouts/DashboardLayout'
import RoleInfoHeader from './components/RoleInfoHeader'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'

const InterviewPrep = () => {

  const {sessionId} = useParams();
  
  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLearnMoreDrawer, setOpenLearnMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  const fetchSessionDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.SESSION.GET_ONE(sessionId)
      );

      if(response.data && response.data.session) {
        setSessionData(response.data.session);
      }
    } catch(error) {
      console.error("Error: ", error);
    }
  };

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

      <div className=''>
        <h2 className=''>Interview Q & A</h2>
      </div>
 
      <div className=''>
        <div className={`col-span-12 ${
          openLearnMoreDrawer ? "md:col-span-7" : "md:col-span-8"
        }`}>
          <AnimatePresence>
            {sessionData?.questions?.map((data, index) => {
              return (
                <motion.dev
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InterviewPrep