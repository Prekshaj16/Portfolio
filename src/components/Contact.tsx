import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // Beep sound function with AudioContext resume support
  const beep = () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 660; // Frequency in Hz
    oscillator.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);

    oscillator.onended = () => {
      ctx.close();
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Play beep sound on submit
    beep();

    const submissionData = {
      access_key: "97de4de4-2ef9-4c03-91a3-17d40a29ace9",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const res = await response.json();

      if (res.success) {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Error sending message:", res);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      value: "prekshajainsurat@gmail.com",
      href: "mailto:prekshajainsurat@gmail.com",
    },
    {
      icon: Phone,
      value: "9016697267",
      href: "tel:9016697267",
    },
    {
      icon: MapPin,
      value: "Surat, Gujarat",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background focus:border-blue-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background focus:border-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background focus:border-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background focus:border-blue-100 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-blue-500/50 transition-all duration-300 glow-hover group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                    <item.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-4">Let's Connect</h3>
              <p className="text-foreground/70 text-sm mb-4">
                I'm always open to discuss new opportunities and ideas together.
                Whether it's exploring innovative projects, refining designs, or
                diving into creative problem-solving, I'm excited to collaborate
                and grow together. Feel free to reach out!🚀
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
