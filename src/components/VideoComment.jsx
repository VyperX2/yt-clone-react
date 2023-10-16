import { Avatar } from "@mui/material";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
const VideoComment = ({ comment }) => {
	return (
		<div className="flex py-6 items-center">
			<Avatar
				src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
			/>
			<div className="flex justify-center flex-col ml-4 gap-2">
				<h4 className=" text-sm font-semibold">
					@{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
				</h4>
				<h4>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</h4>
				<div className="flex items-center gap-4">
					<ThumbUpOffAltOutlinedIcon style={{height: '20px' , color: '#AAAAAA'}} />
					<ThumbDownAltOutlinedIcon style={{height: '20px' , color: '#AAAAAA'}} />
				</div>
			</div>
		</div>
	);
};

export default VideoComment;
