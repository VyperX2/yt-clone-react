import { useContext } from "react";
import VideoContext from "../context/VideoContext";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon: Icon, name }) => {
	const { setSelectedCategory, selectedCategory } = useContext(VideoContext);
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				setSelectedCategory(name);
				navigate("/");
			}}
			className={`${
				selectedCategory === name ? "bg-secondary" : "bg-primary"
			} flex items-center gap-5 px-16 sm:pl-8 py-3 hover:bg-secondary transition-all cursor-pointer`}
		>
			<h4>{Icon}</h4>
			<h4>{name}</h4>
		</div>
	);
};

export default SidebarItem;
