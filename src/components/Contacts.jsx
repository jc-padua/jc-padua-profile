import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';

function Contacts() {
  return (
    <section className="text-center flex flex-col gap-7">
      <p className="text-2xl">Contacts</p>
      <form action="" className="flex flex-col gap-2">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="text-left text-gray-300">
            Your Message
          </Label>
          <Textarea placeholder="Type your message here." id="message" />
          <p className="text-sm text-left text-muted-foreground">
            Your message will be sent to the Jork cedric's email.
          </p>
        </div>
        <Button>Send Message</Button>
      </form>
    </section>
  );
}

export default Contacts;
