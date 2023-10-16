import categories from "../utils/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	return (
		<nav className="sm:flex flex-col w-auto hidden border-r border-secondary fixed z-[] left-0 top-24  ">
			{categories.map((category, index) => (
				<SidebarItem key={index} {...category}  />
			))}
		</nav>
	);
};

export default Sidebar;
