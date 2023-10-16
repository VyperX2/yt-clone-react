import { useParams } from "react-router-dom";
import VideoContext from "../context/VideoContext";
import { useContext, useEffect, useState } from "react";
import { options } from "../utils/apiInfo";
import VideoCard from "../components/VideoCard";
const SearchFeed = () => {
	const { searchTerm } = useParams();
	const [searchedVideos, setSearchedVideos] = useState(null);
	const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&maxResults=50`;

	useEffect(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => setSearchedVideos(data.items))
			.catch((err) => err);
	}, [url]);

	return (
		<section className=" flex flex-col px-4 flex-[6] mt-24 md:ml-28 lg:ml-18 2xl:ml-0">
			<h2 className=" text-3xl mb-6 font-semibold">
				Search Results For : {searchTerm}
			</h2>

			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center  ">
				{searchedVideos?.map((video, index) => (
					<VideoCard key={index} snippet={video.snippet} id={video.id} />
				))}
			</div>
		</section>
	);
};

export default SearchFeed;
