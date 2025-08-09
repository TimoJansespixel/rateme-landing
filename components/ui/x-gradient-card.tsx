import { VerifiedIcon, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ReplyProps {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string;
    isVerified?: boolean;
    timestamp: string;
}

interface XCardProps {
    link: string;
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string[];
    isVerified?: boolean;
    timestamp: string;
    reply?: ReplyProps;
}

function XCard({
    link = "https://x.com/dorian_baffier/status/1880291036410572934",
    authorName = "Dorian",
    authorHandle = "dorian_baffier",
    authorImage = "https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg",
    content = [
        "All components from KokonutUI can now be open in @v0 🎉",
        "1. Click on 'Open in V0'",
        "2. Customize with prompts",
        "3. Deploy to your app",
    ],
    isVerified = true,
    timestamp = "Jan 18, 2025",
    reply = {
        authorName: "shadcn",
        authorHandle: "shadcn",
        authorImage:
            "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
        content: "Awesome.",
        isVerified: true,
        timestamp: "Jan 18",
    },
}: XCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const detect = () => {
            const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;
            const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
            setIsMobileView(isMobileUA || window.innerWidth <= 768);
        };
        detect();
        window.addEventListener('resize', detect);
        return () => window.removeEventListener('resize', detect);
    }, []);
    return (
        <Link
            href={link}
            target="_blank"
        >
            <div
                className={cn(
                    "w-full max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
                    "bg-white",
                    "border border-gray-200",
                    "shadow-[0_2px_4px_rgba(0,0,0,0.15)]",
                    "will-change-transform translate-z-0"
                )}
            >
                <div
                    className={cn(
                        "w-full p-5 rounded-xl relative",
                        "bg-white",
                        "text-black",
                        "shadow-sm",
                        "will-change-transform translate-z-0"
                    )}
                >
                    <div className="flex gap-3 items-center">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                <img
                                    src={authorImage}
                                    alt={authorName}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-center relative">
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className="font-semibold text-black hover:underline cursor-pointer truncate">
                                        {authorName}
                                    </span>
                                    {isVerified && (
                                        <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                    )}
                                    <span className="text-sm truncate" style={{ color: '#5d18eb' }}>
                                        u/{authorHandle}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="h-14 w-14 text-black hover:text-black hover:bg-black/5 rounded-lg p-3 flex items-center justify-center -mr-3 -mt-3"
                                    style={{ position: 'absolute', top: '-5px', right: '-5px' }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="w-10 h-10"
                                    >
                                        <title>Reddit</title>
                                        <path
                                            fill="currentColor"
                                            d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248C15.438 14.498 16 13.937 16 13.25c0-.687-.562-1.249-1.25-1.249z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 x-card-content">
                        <div className={isMobileView && !isExpanded ? 'max-h-20 overflow-hidden' : ''}>
                            {content.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-black text-base"
                                    dangerouslySetInnerHTML={{ 
                                        __html: item.replace(
                                            /\*\*\*([^*]+)\*\*\*/g, 
                                            '<span style="filter: blur(3px); user-select: none;">$1</span>'
                                        )
                                    }}
                                />
                            ))}
                        </div>
                        {isMobileView && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded(!isExpanded);
                                }}
                                className="read-more-btn text-blue-500 hover:text-blue-700 text-sm font-medium mt-2 flex items-center gap-1"
                            >
                                {isExpanded ? (
                                    <>
                                        <ChevronUp className="w-4 h-4 mobile-only-icon" />
                                        <span>Read less</span>
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4 mobile-only-icon" />
                                        <span>Read more</span>
                                    </>
                                )}
                            </button>
                        )}
                        <span className="text-gray-500 text-sm mt-2 block">
                            {timestamp}
                        </span>
                    </div>

                    {reply && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full overflow-hidden">
                                        <img
                                            src={reply.authorImage}
                                            alt={reply.authorName}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-black hover:underline cursor-pointer">
                                            {reply.authorName}
                                        </span>
                                        {reply.isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                        <span className="text-sm" style={{ color: '#5d18eb' }}>
                                            u/{reply.authorHandle}
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            ·
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-black text-sm mt-1">
                                        {reply.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export { XCard } 