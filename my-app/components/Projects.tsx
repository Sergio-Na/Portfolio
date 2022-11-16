import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Projects({}: Props) {
  const projects = ["Personal Website", "Quiz Buzz", "McGill Course Info API", "Digital Moment Forum"];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="text-black relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-300/90">
        <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44h-screen">
            {/* <motion.img
              initial={{
                y: -300,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className=" "
              src="https://cdn.pocket-lint.com/r/s/970x/assets/images/158959-homepage-news-feature-netflix-games-which-titles-are-available-and-where-and-how-to-find-and-play-them-image1-8q1zkhpaum.jpg"
            /> */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Personal Website
                </span>
              </h4>
              <div className="flex space-x-2 my-2">
              <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            />
            <img
            className="h-10 w-12 rounded-full"
            src="https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"
            />
            

              </div>
              <SocialIcon
          url="https://github.com/Sergio-Na/Portfolio"
          fgColor="gray"
          />
              <p className="text-lg text-center md:text-left ">
                Built a fast and responsive portfolio website using Next.js to provide users with lightning fast loading times. Used modern UI framerworks such as Framer Motion to animate elements. 
              </p>
            </div>
          </div>
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44h-screen">
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Trivia Game 
                </span>
              </h4>
              <div className="flex space-x-2 my-2">
              <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            />
            <img
            className="h-10 w-12 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            />
            

              </div>
              <SocialIcon
          url="https://github.com/Sergio-Na/quiz-buzz"
          fgColor="gray"
          />
              <p className="text-lg text-center md:text-left ">
              Developed a trivia web application using React as the frontend. Used question data from The Open Trivia Database API to serve users with interesting questions from 8 different categories.
              </p>
            </div>
          </div>
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44h-screen">
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  McGill Course Info API
                </span>
              </h4>
              <div className="flex flex-wrap space-x-2 my-2">
              <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
            />
             <img
            className="h-10 w-auto rounded-full"
            src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
            />
            
            <img
            className="h-10 w-auto rounded-full"
            src="https://expressjs.com/images/express-facebook-share.png"
            />
           
            

              </div>
              <SocialIcon
          url="https://github.com/Sergio-Na/Mcgill_Courses_API"
          fgColor="gray"
          />
              <p className="text-lg text-center md:text-left ">
              Built a web scraper in order to retrieve course information data from various official McGill websites to serve users with up-to-date details regarding course prerequisites, descriptions and scheduling. Built as a part of an in progress team project that consists of developing a better short and long term course scheduler for McGill students.
              </p>
            </div>
          </div>
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44h-screen">
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Digital Moment Discussion Forum
                </span>
              </h4>
              <div className="flex flex-wrap space-x-2 my-2">
              <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            />
             <img
            className="h-10 w-auto rounded-full"
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            />
            
            <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            />
            <img
            className="h-10 w-auto rounded-full"
            src="https://mui.com/static/logo.png"
            />
           <img
            className="h-10 w-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
            />
             <img
            className="h-10 w-auto rounded-full"
            src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
            />
            
            <img
            className="h-10 w-auto rounded-full"
            src="https://expressjs.com/images/express-facebook-share.png"
            />
            

              </div>
              <SocialIcon
          url="https://github.com/dinesh-07/digital-moment"
          fgColor="gray"
          />
              <p className="text-lg text-center md:text-left ">
              Built as part of Morgan Stanley's Code to Give Hackathon. Collaborated with a team of 7 people to build a modern and responsive full-stack web application that encourages youth from all around the world to contribute challenges and ideas regarding the general hardships of everyday life.
              </p>
            </div>
          </div>
      </div>

      <div className="w-full absolute top-[30%] bg-gray-400 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
