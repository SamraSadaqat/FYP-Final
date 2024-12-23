import { Button, Form, Typography } from "antd";
import { SOCIAL_SIGNUPS } from "constants/constants";
import React from "react";

const SocialSignup = () => {
  return (
    <>
      <Typography
        className="text-center white-text"
        title={"OR"}
        type="title"
        level={3}
      />
      {React.Children.toArray(
        SOCIAL_SIGNUPS.map(({ title, img, altImgTitle }) => (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="btn btn-transparent btn-icon"
            >
              <img src={img} alt={altImgTitle} /> {title}
            </Button>
          </Form.Item>
        ))
      )}
    </>
  );
};

export default SocialSignup;
