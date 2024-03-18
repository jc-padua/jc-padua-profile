import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaMobile,
  FaReact,
} from 'react-icons/fa';
import {
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
function Skills() {
  return (
    <section className="text-center flex flex-col gap-7 m-6">
      <p className="text-2xl lg:text-4xl my-9">Skills</p>
      <div className="grid grid-cols-5 max-[425px]:grid-cols-3 gap-5 place-items-center">
        <FaHtml5 size={50} color="#e34c26" />
        <FaCss3 size={50} color="#42a5f5" />
        <SiJavascript size={50} color="#e4d01c" />
        <SiTailwindcss size={50} color="#43dbff" />
        <FaReact size={50} color="#5fd5f6" />
        <div className="relative flex">
          <FaReact size={50} color="#5fd5f6" />
          <FaMobile
            size={30}
            color="#f5f5f5"
            className="absolute ml-8 mt-7 z-40"
          />
        </div>
        <FaJava size={50} color="#e25040" />
        <SiMysql size={50} color="#F5f5f5" />
        <SiFirebase size={50} color="#fec827" />
        <FaGithub size={50} color="#F5f5f5" />
      </div>
    </section>
  );
}

export default Skills;
