import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/ytLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import VideoContext from "../context/VideoContext";
import { options } from "../utils/apiInfo";
import { useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navbar = () => {
	const [formValue, setFormValue] = useState("");
	const { searchTerm, setSearchTerm, setVideoData } = useContext(VideoContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
		}
	}, [searchTerm]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(formValue);
		setFormValue("");
	};
	return (
		<nav className=" py-4 z-10 px-6 sm:px-8 flex items-center justify-between sm:pt-0 pt-6 fixed top-0 left-0 right-0 bg-primary ">
			<div className="sm:flex items-center hidden flex-1 ">
				<MenuIcon />
				<Link
					className=" font-bold flex items-center"
					to={"/"}
					onClick={() => setSearchTerm("")}
				>
					<YouTubeIcon style={{ color: "red" }} />
					MateenTube
					{/* <img className=" h-24 object-contain" src={Logo} alt="" /> */}
				</Link>
			</div>
			{/*  */}
			<div className="flex justify-between items-center flex-[3] gap-4">
				<form
					onSubmit={handleSubmit}
					action=""
					className=" bg-secondary border border-secondary w-full   rounded-full  flex "
				>
					<input
						value={formValue}
						onChange={(e) => setFormValue(e.target.value)}
						type="text"
						className=" rounded-l-full flex-[3] bg-primary py-3 outline-none  px-6"
						placeholder="Search"
					/>
					<button className=" px-4">
						<SearchIcon />
					</button>
				</form>
				<button className=" py-3 px-3 bg-secondary rounded-full hidden lg:block">
					<KeyboardVoiceIcon />
				</button>
			</div>
			{/*  */}
			<div className=" hidden lg:flex items-center justify-end gap-x-5 flex-1">
				<VideoCameraBackOutlinedIcon
					style={{ height: "32px", width: "40px" }}
				/>
				<NotificationsNoneOutlinedIcon
					style={{ height: "32px", width: "40px" }}
				/>
				<Avatar style={{ height: "32px", width: "32px" }} />
			</div>
		</nav>
	);
};

export default Navbar;
