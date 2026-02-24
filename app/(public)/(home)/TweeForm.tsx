import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
    return(
        <form action={postTweet} className="mb-5 border border-white/10 rounded-xl p-4 bg-black text-white space-y-3">
            <input 
                name='content'
                placeholder="What's happening ?"
                className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
            />
            <div className="flex justify-end">
                <button 
                    type="submit"
                    className="bg-white text-black text-sm font-semibold px-4
                    py-1.5 rounded-full hover:bg-gray-200 transition"
                >
                    Tweet
                </button>
            </div>
        </form>
    )
}