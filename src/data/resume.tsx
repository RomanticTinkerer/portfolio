import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Bash } from "@/components/ui/svgs/bash";
import { GDScript } from "@/components/ui/svgs/gdscript";

export const DATA = {
  name: "Animesh Singh",
  initials: "AS, RT",
  url: "https://localhost:3000",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "High School Student preaching Open Source and tinkering with Operating Systems.",
  summary:
    "I am a 16 year old high school student from Lucknow, India who is passionate about multiple niches. Operating Systems, Gaming/Game Design, Cooking, and more. Online I am known by my username/alias: RomanticTinkerer.",
  avatarUrl: "/me.png",
  skills: [
    { name: "C#", icon: Csharp },
    { name: "Bash", icon: Bash },
    { name: "GDScript", icon: GDScript },
    { name: "Python", icon: Python },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "animeshrocking14@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RomanticTinkerer",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@legacyisanimesh",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "City Montessori School",
      href: "https://cmseducation.org",
      degree: "High School Student",
      logoUrl: "cms.png",
      start: "2024",
      end: "2028",
    },
  ],
  explorations: [
    {
      title: "Linux",
      description:
        "Over the past two years, I have spent time exploring and working with Linux. Everything from Developer Environments to Ricing (Community term for extensive customization).",
    },
    {
      title: "Game Design",
      description:
        "As an avid gamer, I decided to study my favorite games and launched a podcast on the same. First episode is on DOOM.",
    },
    {
      title: "Android Open Source Project (AOSPs)",
      description:
        "I have been tinkering with custom AOSP distributions on compatible mobile phones and was able to extend the lifespan of mobile phones as old as 7-8 years alongside adding new functionality, features previously deemed as incompatible and updating the Android version way beyond the manufacturer's intent.",
    },
    {
      title: "Open Source Exploration",
      description:
        "I dove into GNU/Linux in 2024, and have been working and understanding it since. In 2026, I started to build projects that would enhance the Linux experience of fellow Linux users.",
    },
  ],
  projects: [
    {
      title: "Deep Focus",
      href: "https://github.com/RomanticTinkerer/deepfocus",
      dates: "2026",
      active: true,
      description:
        "A productivity app that escalates itself to root to block applications and sites from launching. Focus with a crystal lens. Fully open-source, only on GNU/Linux for now.",
      technologies: ["Python", "Linux", "systemd"],
      links: [
        {
          type: "Source",
          href: "https://github.com/RomanticTinkerer/deep-focus",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FelixAudio",
      href: "https://github.com/RomanticTinkerer/felixaudio",
      dates: "2026",
      active: true,
      description:
        "An open-source Nahimic style audio enhancer for GNU/Linux. Based off of EasyEffects, tweaked for simplicity.",
      technologies: ["Linux", "C++"],
      links: [
        {
          type: "Source",
          href: "https://github.com/RomanticTinkerer/felixaudio",
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
