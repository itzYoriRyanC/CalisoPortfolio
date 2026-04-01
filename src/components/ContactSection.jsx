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

  const EMAIL = "calisoryan2@gmail.com";
  const PHONE = "+649640855896";
  const PHONE_LABEL = "+64 9640 855 896";
  const LOCATION = "Philippines, Misamis Occidental";
  const DISCORD_USER_ID = "707200309172109365";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Open to freelance work, collaborations, and entry-level
            opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* LEFT */}
          <div className="space-y-8 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition"
                  >
                    {PHONE_LABEL}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-sm sm:text-base text-muted-foreground">
                    {LOCATION}
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex justify-center lg:justify-start gap-5">
                <a href="https://www.linkedin.com/in/ryan-caliso-1519b238a/" target="_blank" rel="noreferrer">
                  <Linkedin className="hover:text-primary transition" />
                </a>

                <a href="https://www.facebook.com/ry.lagroma" target="_blank" rel="noreferrer">
                  <Facebook className="hover:text-primary transition" />
                </a>

                <a href="https://www.instagram.com/yoooo_riii/" target="_blank" rel="noreferrer">
                  <Instagram className="hover:text-primary transition" />
                </a>

                <a href={`https://discord.com/users/${DISCORD_USER_ID}`} target="_blank" rel="noreferrer">
                  <SiDiscord className="hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-card p-6 sm:p-8 rounded-xl border border-border/40 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
              />

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