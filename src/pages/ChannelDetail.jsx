import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/apiInfo";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoCard from "../components/VideoCard";

const ChannelDetail = () => {
	const { id } = useParams();
	const [channelData, setChannelData] = useState(null);
	const [channelVideos, setChannelVideos] = useState(null);
	const channelUrl = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`;
	const channelVideoUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`;

	useEffect(() => {
		fetch(channelUrl, options)
			.then((res) => res.json())
			.then((data) => setChannelData(data?.items[0]))
			.catch((err) => err);

		fetch(channelVideoUrl, options)
			.then((res) => res.json())
			.then((data) => setChannelVideos(data.items))
			.catch((err) => err);
	}, []);

	return (
		<div className="mt-24 w-full h-full flex flex-col">
			<div
				style={{
					background: " rgb(63,94,251)",
					background:
						"linear-gradient(20deg, rgba(63,94,251,1) 9%, rgba(252,70,107,1) 100%)",
				}}
				className=" sm:h-72 h-48 w-full"
			/>
			<div className=" flex flex-col sm:flex-row w-full items-center gap-4 mt-4 container mx-auto">
				<img
					className=" h-48 w-48 rounded-full"
					src={channelData?.snippet?.thumbnails?.high?.url}
					alt=""
				/>
				<div className=" flex flex-col">
					<div className="flex items-center gap-2">
						<h4 className=" text-2xl font-semibold">
							{channelData?.snippet?.title}
						</h4>
						<CheckCircleIcon style={{ color: "#AAAAAA" }} />
					</div>
					<h4 className=" text-[#AAAAAA] text-sm">
						{channelData?.statistics?.videoCount} Videos
					</h4>
					<h4 className=" text-[#AAAAAA] text-sm">
						{parseInt(
							channelData?.statistics?.subscriberCount
						).toLocaleString()}{" "}
						Subscribers
					</h4>
					<h4 className=" text-[#AAAAAA] text-sm">
						{channelData?.snippet?.description}
					</h4>
				</div>
			</div>

			{/* Channel Videos */}
			<div className=" container mx-auto">
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-16 ">
					{channelVideos?.map((video, index) => (
						<VideoCard key={index} snippet={video.snippet} id={video.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ChannelDetail;
