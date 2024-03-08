import Contacts from '@/components/Contacts';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

function Panel() {
  return (
    <div className="">
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default Panel;
