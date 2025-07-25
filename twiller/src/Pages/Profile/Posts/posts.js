import React from "react";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { useTranslation } from "react-i18next";

const Posts = ({ p }) => {
  const { t } = useTranslation();
  const { name, username, photo, post, profilephoto } = p;

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={profilephoto} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {name}{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> {t("post.at")}{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{post}</p>
          </div>
        </div>
        <img src={photo} alt="" width="500" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon
            className="post__fotter__icon"
            fontSize="small"
            titleAccess={t("post.comment")}
          />
          <RepeatIcon
            className="post__fotter__icon"
            fontSize="small"
            titleAccess={t("post.retweet")}
          />
          <FavoriteBorderIcon
            className="post__fotter__icon"
            fontSize="small"
            titleAccess={t("post.like")}
          />
          <PublishIcon
            className="post__fotter__icon"
            fontSize="small"
            titleAccess={t("post.share")}
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
