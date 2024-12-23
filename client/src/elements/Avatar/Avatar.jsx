import { getInitials } from "@monorepo/shared/src/helpers/helper";
import { Avatar as CustomAvatar } from "antd";
import styles from "elements/Avatar/Avatar.module.scss";
import { PropTypes } from "prop-types";
import React, { useEffect } from "react";
import { useState } from "react";
const Avatar = (props) => {
  const { image, header } = props;
  const [url, setURL] = useState();
  useEffect(() => {
    if (image) {
      setURL(image?.imageUrl);
    }
  }, [image]);
  return (
    <>
      {image?.imageUrl ? (
        <div className={header ? styles.headerAvatar : styles.regularAvatar}>
          <img
            src={url}
            alt={getInitials(image.alt)}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <CustomAvatar
          style={{
            verticalAlign: "middle",
          }}
          size="large"
          gap={5}
        >
          {getInitials(image?.alt)}
        </CustomAvatar>
      )}
    </>
  );
};

export default Avatar;

Avatar.propTypes = {
  image: PropTypes.objectOf(PropTypes.string),
  header: PropTypes.bool,
};
