import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useContext } from "react";
import VideoContext from "../context/VideoContext";
const VideoCard = ({ snippet, id }) => {
	const { setGlobalChannelId } = useContext(VideoContext);
	const { title, channelTitle, thumbnails, channelId, description } = snippet;
	const { videoId, kind } = id;
	return (
		<>
			{kind === "youtube#channel" ? (
				<Link to={channelId ? `/channel/${channelId}` : ""} className="flex flex-col items-center">
					<img className=" max-h-56 rounded-2xl" src={thumbnails?.high?.url} alt="" />
					<h4 className=" mt-3 text-lg mb-1 font-semibold ">
						{title.slice(0, 53)}
					</h4>
					<div className=" flex items-center gap-2 ">
						<Link
							onClick={() => setGlobalChannelId(channelId)}
							to={`/channel/${channelId}`}
							className=" text-sm text-[#AAAAAA]"
						>
							{channelTitle}
						</Link>
						<CheckCircleIcon
							style={{ color: "#AAAAAA", height: "14px", width: "14px" }}
						/>
					</div>
				</Link>
			) : (
				<Link to={videoId ? `/video/${videoId}` : ""} className="flex flex-col">
					<img className=" rounded-2xl" src={thumbnails?.high?.url} alt="" />
					<h4 className=" mt-3 text-lg mb-1 font-semibold ">
						{title.slice(0, 53)}
					</h4>
					<div className=" flex items-center gap-2">
						<Link
							onClick={() => setGlobalChannelId(channelId)}
							to={`/channel/${channelId}`}
							className=" text-sm text-[#AAAAAA]"
						>
							{channelTitle}
						</Link>
						<CheckCircleIcon
							style={{ color: "#AAAAAA", height: "14px", width: "14px" }}
						/>
					</div>
				</Link>
			)}
		</>
	);
};

export default VideoCard;
