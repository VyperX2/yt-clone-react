import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import ChannelDetail from "./pages/ChannelDetail";
import VideoDetail from "./pages/VideoDetail";
import { VideoProvider } from "./context/VideoContext";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchFeed from "./pages/SearchFeed";

const App = () => {
	const location = useLocation();

	return (
		<VideoProvider>
			<div className=" font-roboto text-white bg-primary h-screen flex flex-col ">
				<Navbar />
				<div className=" flex bg-primary gap-2">
					{(location.pathname === "/" ||
						location.pathname.startsWith("/search/")) && (
						<div className="sm:flex-[1]">
							<Sidebar />
						</div>
					)}

					<Routes>
						<Route path="/" element={<Feed />} />
						<Route path="/search/:searchTerm" element={<SearchFeed />} />
						<Route path="/channel/:id" element={<ChannelDetail />} />
						<Route path="/video/:id" element={<VideoDetail />} />
					</Routes>
				</div>
			</div>
		</VideoProvider>
	);
};

export default App;
