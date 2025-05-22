"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./animated-list";
import { brandinfData } from "../pages/features/feature-data";
import { FeatureModelProps } from "../pages/features/feature-model";

let notifications = brandinfData;

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  title,
  content,
  iconColor
}: FeatureModelProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden p-3">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span
              className={`text-sm sm:text-lg `}
              style={{ color: iconColor }}
            >
              {title}
            </span>
            {/* <span className="mx-1">·</span> */}
            {/* <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{content}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo1({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[800px] w-full flex-col p-6 overflow-hidden rounded-lg   ",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
