import React from "react";

function AchievementCard({ title, stat, unit, description, badge }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-2xl  bg-secondary-foreground  border border-[rgba(255,255,255,0.10)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group  group-hover/pin:border-white/[0.2] transitiont w-72 p-4">
      <div className="flex flex-col items-start w-full">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black font-poppins bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {stat}
          </span>
          <span className="text-xs font-semibold font-poppins text-muted uppercase tracking-wide">
            {unit}
          </span>
        </div>
        <h2 className="text-lg font-semibold font-poppins mt-2">{title}</h2>
        <p className="text-sm py-1.5 font-poppins text-muted">{description}</p>
        {badge && (
          <div className="flex items-center flex-wrap gap-2 mt-1">
            <span className="text-xs font-medium px-3 py-1.5 font-poppins backdrop-blur-md border transition-colors overflow-hidden bg-gradient-to-t border-r-0 duration-200 whitespace-nowrap from-muted/10 to-button/15 text-foreground hover:text-secondary border-button/20 rounded-3xl">
              {badge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AchievementCard;
