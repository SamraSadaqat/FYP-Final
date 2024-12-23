import { SmileOutlined } from "@ant-design/icons";
import { PUBLIC_ROUTES } from "constants/constants";
import Button from "elements/Button/Button";
import Result from "elements/Result/Result";
import React from "react";

function GamesPage() {
  return (
    <div className="login-wrapper">
      <Result
        title="Coming Soon!"
        icon={<SmileOutlined />}
        extra={
          <Button href={PUBLIC_ROUTES.APP} type="primary" key="goback">
            Go Home
          </Button>
        }
      />
    </div>
  );
}

export default GamesPage;
