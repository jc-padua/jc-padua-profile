import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { FaReact } from 'react-icons/fa';
import { TbBrandReact } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

import TFPROJECT from '../assets/imgs/TF-PROJECT.png';

function Projects() {
  const projects = [
    {
      name: 'Teen Future',
      image: TFPROJECT,
      description:
        'Teen Future is a mobile app and web application duo designed to inform teenagers about sexual education and reproductive health. The mobile app offers interactive learning experiences like quizzes and word games to keep users engaged. Additionally, a separate web application for administrators provides data visualization and content management tools to understand user engagement and modify mobile app content accordingly.',
    },
  ];
  return (
    <section className="text-center flex flex-col gap-7">
      <p className="text-2xl">Projects</p>
      {projects.map(project => {
        return (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                <DialogTrigger className="text-white" asChild>
                  <AspectRatio ratio={16 / 8}>
                    <img src={project.image} alt="Teen Future" />
                  </AspectRatio>
                </DialogTrigger>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DialogContent className="bg-[#0d1f3e] text-white rounded-lg w-11/12">
                <DialogHeader>
                  <DialogTitle className="mb-4">Teen Future</DialogTitle>
                  <DialogDescription className="leading-6 text-justify">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                  <DialogClose className="text-gray-300 outline rounded-lg active:outline-red-400">
                    Close
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="inline-flex items-center rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-[#5fd5f6] ring-1 ring-inset ring-[#5fd5f6]">
                  <FaReact size={20} className="mr-2" /> React
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-[#42a5f5] ring-1 ring-inset ring-[#42a5f5]">
                  <TbBrandReact size={20} className="mr-2" /> React Native
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-600">
                  <IoLogoFirebase size={20} className="mr-2" /> Firebase
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-[#43dbff] ring-1 ring-inset ring-[#43dbff]">
                  <SiTailwindcss size={20} className="mr-2" /> Tailwind
                </span>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}

export default Projects;
