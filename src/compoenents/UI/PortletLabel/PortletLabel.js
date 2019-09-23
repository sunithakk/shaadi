import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  sm: {
    height: theme.spacing.unit,
    width: theme.spacing.unit
  },
  md: {
    height: theme.spacing.unit * 2,
    width: theme.spacing.unit * 2
  },
  lg: {
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3
  },
  neutral: {
    backgroundColor: "#77924c"
  },
  primary: {
    backgroundColor: "#77924c"
  },
  info: {
    backgroundColor: "#77924c"
  },
  warning: {
    backgroundColor: "#77924c"
  },
  danger: {
    backgroundColor: "#77924c"
  },
  success: {
    backgroundColor: "#77924c"
  }
});

const PortletLabel = props => {
  const { classes, className, size, color, ...rest } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes[size]]: size,
      [classes[color]]: color
    },
    className
  );

  return (
    <span
      {...rest}
      className={rootClassName}
      //
    />
  );
};

PortletLabel.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'neutral',
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

PortletLabel.defaultProps = {
  size: 'md',
  color: 'default'
};

export default withStyles(styles)(PortletLabel);
