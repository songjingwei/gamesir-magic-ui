import ReviewRectIcon from "@/icons/PlayerReview/ReviewRectIcon";
import ReviewStarIcon from "@/icons/PlayerReview/ReviewStarIcon";
import type React from "react";
import { cn } from "@/lib/utils";

const STATUS_MAP = {
  好评如潮: {
    color: "#98ffe8",
  },
  特别好评: {
    color: "#98ffe8",
  },
  多半好评: {
    color: "#98ffe8",
  },
  褒贬不一: {
    color: "#f9d802",
  },
  多半差评: {
    color: "#f9d802",
  },
  差评如潮: {
    color: "#ff6143",
  },
};

interface IPlayerReviewProps {
  // status: keyof typeof STATUS_MAP;
  score: number;
}

const PlayerReview: React.FC<IPlayerReviewProps> = ({ score }) => {
  let status: keyof typeof STATUS_MAP;
  if (score >= 95) {
    status = "好评如潮";
  } else if (score >= 80) {
    status = "特别好评";
  } else if (score >= 70) {
    status = "多半好评";
  } else if (score >= 40) {
    status = "褒贬不一";
  } else if (score >= 20) {
    status = "多半差评";
  } else {
    status = "差评如潮";
  }
  const color = STATUS_MAP[status].color;

  return (
    <div className="flex items-center p-0">
      <div className="relative">
        <ReviewRectIcon />
        <div className={cn("absolute -left-1 -top-1")}>
          <ReviewStarIcon color={color} />
        </div>
        <div
          className={cn(
            "flex items-center",
            "absolute left-4 top-1/2 transform -translate-y-1/2",
            "text-[#bad7f5] text-sm font-bold leading-5"
          )}
        >
          <span>玩家评价：</span>
          <span>{status}</span>
        </div>
      </div>
      <div className="relative w-[86px] h-[32px] flex items-center justify-center">
        <div
          className={cn(
            "absolute inset-0 bg-[rgb(186,215,245)]/10 backdrop-blur-[5px]",
            "rounded-tr-[10px] rounded-br-[10px]"
          )}
          style={{
            clipPath:
              "polygon(9.45117px 0px, 86px 0px, 86px 32px, 2.55052px 32px, 0.608225px 29.5231px, 7.48376px 1.52306px)",
            borderRadius: "0 10px 10px 0",
          }}
        />
        <div
          className="flex items-end relative z-10 font-bold leading-5"
          style={{
            color: color,
          }}
        >
          <span className="text-xl">{score}</span>
          <span className="text-sm relative -top-[1px]">%</span>
        </div>
      </div>
    </div>
  );
};

export { PlayerReview };
