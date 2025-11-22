"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="w-full flex justify-center py-10 px-4">
      <Card className="w-full max-w-xl p-6 shadow-xl rounded-2xl">
        <CardContent>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Write your message here..."
                className="mt-1"
              />
            </div>

            <Button className="w-full py-2 text-lg">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
