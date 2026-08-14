"use client";
import React from "react";
import { Timeline } from "@/app/components/timeline";
import AchievementCard from "@/app/components/achievementCard";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaTrophy, FaCode } from "react-icons/fa";

function ExperienceSection() {
  const experienceDetails = [
    "Built and shipped full stack features across the student and tutor-facing product, from schema design in Prisma to React interfaces.",
    "Collaborated with the product team to translate EdTech course and assessment workflows into working software.",
    "Worked across the stack Node.js/Express APIs, PostgreSQL data models, and React frontend in a live production codebase.",
  ];

  const achievements = [
    {
      title: "Quasar 2.0",
      stat: "2nd",
      unit: "Runner Up",
      description: "College-level hackathon — placed 2nd runner up out of all competing teams.",
      badge: "Hackathon",
      icon: FaTrophy,
    },
    {
      title: "Codeforces",
      stat: "1200+",
      unit: "Rating",
      description: "Competitive programming rating built through consistent contest participation.",
      badge: "Competitive Programming",
      icon: FaCode,
    },
    {
      title: "LeetCode",
      stat: "1800+",
      unit: "Rating",
      description: "Contest rating reflecting consistent practice in data structures and algorithms.",
      badge: "Problem Solving",
      icon: FaCode,
    },
  ];

  const timelineData = [
    {
      eyebrow: "Sep 2025 — Feb 2026",
      title: "Full Stack Web Developer, Pisqre",
      content: (
        <div className="p-1 px-1.5 sm:p-2 sm:px-3.5 backdrop-blur-lg rounded-2xl bg-[rgba(67,67,67,0.08)] border border-button/20 shadow-[0px_0px_1px_0px_rgba(248,248,248,0.4)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.30)]">
          <div className="p-4 flex flex-col gap-3">
            <p className="text-sm font-poppins text-muted">
              6-month internship at Pisqre, an EdTech platform, building
              product features end to end as part of the engineering team.
            </p>
            <div className="flex flex-col gap-1.5">
              {experienceDetails.map((detail, index) => (
                <div className="flex gap-1.5 text-xs" key={index}>
                  <TiArrowRightOutline className="size-3 shrink-0 mt-0.5" />
                  <p className="font-poppins text-muted">{detail}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              {["Node.js", "Express", "PostgreSQL", "Prisma", "React"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 font-poppins backdrop-blur-md border transition-colors overflow-hidden bg-gradient-to-t border-r-0 duration-200 whitespace-nowrap from-muted/10 to-button/15 text-foreground hover:text-secondary border-button/20 rounded-3xl"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "Milestones",
      title: "Achievements",
      content: (
        <div className="grid grid-cols-1  gap-4 place-items-center">
          {achievements.map((a) => (
            <AchievementCard
              key={a.title}
              title={a.title}
              stat={a.stat}
              unit={a.unit}
              description={a.description}
              badge={a.badge}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div
      className="mt-16 flex flex-col justify-center items-center w-full px-10"
      id="Experience"
    >
      <Timeline
        data={timelineData}
        heading="Experience & Achievements."
        subheading="Where I've worked, and what I've earned along the way."
      />
    </div>
  );
}

export default ExperienceSection;