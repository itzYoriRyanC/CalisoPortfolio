import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_cx2isks",
        "template_c5oorv1",
        e.target,
        "ptYbyUL1np5bXH9wu"
      )
      .then(() => {
        toast.success("Message sent!");
        setIsSubmitting(false);
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
        setIsSubmitting(false);
      });
  };


  // Centralize your links/values (easier to maintain)
  const EMAIL = "calisoryan2@gmail.com";
  const PHONE = "+649640855896"; // for tel: links (no spaces)
  const PHONE_LABEL = "+64 9640 855 896"; // for display
  const LOCATION = "Philippines, Misamis Occidental";

  // NOTE: Replace DISCORD_USER_ID with your real Discord User ID
  // (Discord -> User Settings -> Advanced -> Developer Mode -> right click your profile -> Copy ID)
  const DISCORD_USER_ID = "707200309172109365";

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Section subtext */}
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Have a project in mind or want to collaborate? I’m open to new
          opportunities and flexible, student-friendly collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: Contact info + socials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  {/* IMPORTANT: mailto: makes it clickable as an email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  {/* tel: needs a clean number (no spaces) */}
                  <a
                    href={`tel:${PHONE}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {PHONE_LABEL}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">{LOCATION}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              {/* 
                Use a shared class so all icons behave the same:
                - consistent size
                - consistent hover color
              */}
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ryan-caliso-1519b238a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="https://www.facebook.com/ry.lagroma"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Facebook size={22} />
                </a>

                <a
                  href="https://www.instagram.com/yoooo_riii/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Instagram size={22} />
                </a>

                {/* 
                  Discord note:
                  - lucide-react does NOT have a Discord brand icon
                  - react-icons does (SiDiscord)
                  - Use size + className="block" to align baseline nicely with Lucide icons
                */}
                <a
                href={`https://discord.com/users/${DISCORD_USER_ID}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <SiDiscord size={22} className="block" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Message form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="eg. John Doe..."
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
