import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-300/90">
        <ExperienceCard Title= {"Software Developer Intern"} Company={"SpaceBridge Inc"} Company_logo={"https://media-exp1.licdn.com/dms/image/C4D0BAQEFVK_tm1MayA/company-logo_200_200/0/1633709058418?e=2147483647&v=beta&t=djcdtmhbDJ3kzay8m2-mwmz3tmLV6KbPuOap6UvdQRM"} startDate={"June 2022"} endDate={"August 2022"} description={["Developed an automated test suite using python for quality testing of satellite communication channels.", "Reduced hardware testing time from 4 months to under 48 hours", "Designed a user friendly Jenkins interface with over 20 customisable test parameters in order to streamline test execution","Reduced the time that it takes to diagnose system bugs by over 60%."]} Technologies={["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5iGGIZHHvZBaHsZf_EqDc_Fyoy7mKOXoNoBWpRzzDtVWQS5r75LcY7GsvdEH5Hv3UG8&usqp=CAU","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png","https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png","https://www.jirastrategy.com/wp-content/uploads/2020/02/jira-logo-gradient-blue@2x-300x177.png","https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png","https://about.gitlab.com/images/press/logo/preview/gitlab-logo-200-preview.png"]} />
        <ExperienceCard Title={"Software Team Member, Autonomous Underwater Vehicle"} Company={"McGill University Robotics Team"} Company_logo={"data:image/png;base64,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"} Technologies={["https://cdn2.hubspot.net/hub/13401/file-13223220-jpg/images/ros_industrial_logo%28tm%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"]} startDate={"September 2022"} endDate={"Present"} description={["Collaborated with more than a dozen team members in the development of software for an autonomous underwater vehicle used in international competition"]}/>
      </div>
    </motion.div>
  );
}

export default Experience;
