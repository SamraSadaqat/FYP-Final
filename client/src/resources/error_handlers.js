import React from "react";
import { HTTP_STATUS_CODES } from "constants/constants";
import { PUBLIC_ROUTES } from "constants/constants";
import Button from "elements/Button/Button";
import Result from "elements/Result/Result";

export const INTERNAL_SERVER_ERROR = () => {
  return (
    <Result
      status={HTTP_STATUS_CODES.INTERNAL_ERROR.toString()}
      subTitle={HTTP_STATUS_CODES.INTERNAL_ERROR_MSG}
      extra={
        <Button href={PUBLIC_ROUTES.APP} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export const NOT_FOUND = () => {
  return (
    <Result
      status={HTTP_STATUS_CODES.NOT_FOUND.toString()}
      subTitle={HTTP_STATUS_CODES.NOT_FOUND_MSG}
      extra={
        <Button href={PUBLIC_ROUTES.APP} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export const UNAUTHORIZED = () => {
  return (
    <Result
      status={HTTP_STATUS_CODES.NOT_FOUND.toString()}
      subTitle={HTTP_STATUS_CODES.UNAUTHORIZED_MSG}
      extra={
        <>
          <Button href={PUBLIC_ROUTES.APP} type="primary" title="Back Home" />
        </>
      }
    />
  );
};
