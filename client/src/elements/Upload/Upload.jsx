import { Upload as AntUpload} from 'antd';
import { PropTypes } from "prop-types";
import React from 'react';

const Upload = (props) => {
  return (
    <AntUpload {...props.uploadProps}>
        {props.children}
    </AntUpload>
  );
};

export default Upload;
Upload.propTypes = {
  uploadProps:PropTypes.object,
  children: PropTypes.object,
};