import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  Linkedin,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="grow">
      <div className="grid">
        <div className=" grid md:grid-cols-4 p-2 gap-2">
          <div className="rounded-box border-primary bg-base-100 border-2 shadow-lg p-2 flex justify-center items-center text-xl font-bold box-border gap-2">
            <LinkIcon />
            Follow us on:
          </div>
          <div className="rounded-box  p-2 shadow-lg grid grid-cols-2 lg:grid-cols-4  md:col-span-3  border-primary bg-base-100 border-2 gap-2">
            <Link to={"/instagram.com"} className="btn btn-ghost">
              <FacebookIcon />
              Facebook
            </Link>
            <Link to={"/instagram.com"} className="btn btn-ghost">
              <LinkedinIcon />
              Linkedin
            </Link>
            <Link to={"/instagram.com"} className="btn btn-ghost">
              <TwitterIcon />
              Twitter
            </Link>
            <Link to={"/instagram.com"} className="btn btn-ghost">
              <InstagramIcon />
              Instagram
            </Link>
          </div>
        </div>

        <div className="stats shadow stats-vertical lg:stats-horizontal p-2 m-2">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}
