import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { options } from "../utils/apiInfo";
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { Avatar } from "@mui/material";
import VideoComment from "../components/VideoComment";
const VideoDetail = () => {
	const { id } = useParams();
	const [suggestedVideos, setSuggestedVideos] = useState([]);
	const [videoData, setVideoData] = useState([]);
	const [comments, setComments] = useState([]);
	const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
	const suggestedVideoUrl = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`;
	const currentVideoUrl = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;

	useEffect(() => {
		fetch(currentVideoUrl, options)
			.then((res) => res.json())
			.then((data) => setVideoData(data.items[0]))
			.catch((err) => err);

		fetch(suggestedVideoUrl, options)
			.then((res) => res.json())
			.then((data) => setSuggestedVideos(data.items))
			.catch((err) => err);

		fetch(commentsUrl, options)
			.then((res) => res.json())
			.then((data) => setComments(data.items))
			.catch((err) => err);
	}, [suggestedVideoUrl]);


	return (
		<div className="mt-24 w-full flex sm:flex-row flex-col px-8 gap-20 overflow-x-hidden ">
			<div className="mt-10 flex-[3] flex flex-col container ">
				<ReactPlayer
					controls="true"
					width="100%"
					height="600px"
					playing="true"
					url={`https://www.youtube.com/watch?v=${id}`}
				/>
				<div className="flex flex-col mt-4">
					<h4 className=" text-2xl">{videoData?.snippet?.localized?.title}</h4>
					<div className="flex items-center justify-between">
						<div className=" flex items-center gap-2 mt-2">
							<Avatar />
							<h4 className=" font-semibold">
								{videoData?.snippet?.channelTitle}
							</h4>
						</div>
						<div className=" flex flex-col sm:flex-row  gap-4">
							<h4 className=" text-sm text-[#AAAAAA]">
								{parseInt(videoData?.statistics?.viewCount).toLocaleString()}{" "}
								Views
							</h4>
							<h4 className=" text-sm text-[#AAAAAA]">
								{parseInt(videoData?.statistics?.likeCount).toLocaleString()}{" "}
								Likes
							</h4>
							<h4 className=" text-sm text-[#AAAAAA]">
								{parseInt(videoData?.statistics?.commentCount).toLocaleString()}{" "}
								Comments
							</h4>
						</div>
					</div>
				</div>
				<div className="section">
					{comments.map((comment, index) => (
						<VideoComment key={index} comment={comment} />
					))}
				</div>
			</div>
			<div className="flex flex-col gap-8 mt-10 flex-1">
				{suggestedVideos?.map((video, index) => (
					<VideoCard key={index} snippet={video.snippet} id={video.id} />
				))}
			</div>
		</div>
	);
};

export default VideoDetail;
