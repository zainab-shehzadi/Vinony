import { Link } from "react-router-dom";

type Props = {
  leftText: string;
  leftTo: string;
  rightText?: string;
  rightTo?: string;
  className?: string;
};

export default function AuthLinks({
  leftText,
  leftTo,
  rightText,
  rightTo,
  className = "",
}: Props) {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm ${className}`}>
      <Link to={leftTo} className="auth-link">
        {leftText}
      </Link>
      {rightText && rightTo ? (
        <>
          <span className="text-gray-300">•</span>
          <Link to={rightTo} className="auth-link">
            {rightText}
          </Link>
        </>
      ) : null}
    </div>
  );
}
