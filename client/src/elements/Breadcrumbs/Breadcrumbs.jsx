import breadCrumbConfig from "elements/Breadcrumbs/config";
import Typography from "elements/Title/Text";
import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const options = {
  disableDefaults: true,
};

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(breadCrumbConfig, options);
  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }, i) => (
        <span key={match.pathname}>
          <Link to={match.pathname}>
            <Typography
              title={
                i === breadcrumbs.length - 1
                  ? ` ${breadcrumb.props.children}`
                  : ` ${breadcrumb.props.children} /`
              }
              className="white-text"
            />
          </Link>
        </span>
      ))}
    </>
  );
};

export default BreadCrumbs;
