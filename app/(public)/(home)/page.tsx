import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "@/shared/types/data/tweet.data";

export default function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <div className="space-y-6">
          {TWEETS.map(tweet => 
          <Tweet 
          key={tweet.author}
          tweet={tweet}
          />
          )}
        </div>
    </div>
  );
}
