import { createContext, useState } from "react";

const VideoContext = createContext({});

const VideoProvider = ({ children }) => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [globalChannelId, setGlobalChannelId] = useState("");
	const [videoData, setVideoData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<VideoContext.Provider
			value={{
				selectedCategory: selectedCategory,
				globalChannelId: globalChannelId,
				videoData: videoData,
				searchTerm: searchTerm,
				setSearchTerm,
				setVideoData,
				setSelectedCategory,
				setGlobalChannelId,
			}}
		>
			{children}
		</VideoContext.Provider>
	);
};

export default VideoContext;
export { VideoProvider };
