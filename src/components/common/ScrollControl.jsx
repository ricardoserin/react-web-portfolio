import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollControl = (props) => {
  const { to } = props;
  const wrapperClass = 'section__control';

  window.addEventListener('scroll', () => {
    const scrollContrlUp = document.getElementById('control-up');
    const scrollContrlDown = document.getElementById('control-down');
    const posFooter = document.getElementById('sectionContainer').scrollHeight - 10;
    if (document.documentElement.scrollTop < 64) {
      scrollContrlUp.className = `${wrapperClass} ${wrapperClass}-up ${wrapperClass}--hidden`;
    } else if (document.documentElement.scrollTop === 64) {
      scrollContrlUp.className = `${wrapperClass} ${wrapperClass}-up`;
    }
    if (window.scrollY >= posFooter - 10) {
      scrollContrlDown.className = `${wrapperClass} ${wrapperClass}-down ${wrapperClass}--hidden`;
    }
  });

  document.onmousemove = () => {
    const scrollContrlUp = document.getElementById('control-up');
    const scrollContrlDown = document.getElementById('control-down');
    const posFooter = document.getElementById('sectionContainer').scrollHeight - 10;

    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      scrollContrlUp.className = `${wrapperClass} ${wrapperClass}-up ${wrapperClass}--hidden`;
      scrollContrlDown.className = `${wrapperClass} ${wrapperClass}-down ${wrapperClass}--hidden`;
    }, 1000);
    scrollContrlDown.className = `${wrapperClass} ${wrapperClass}-down ${wrapperClass}--visible`;
    if (document.documentElement.scrollTop < 64) {
      scrollContrlUp.className = `${wrapperClass} ${wrapperClass}-up ${wrapperClass}--hidden`;
    } else {
      scrollContrlUp.className = `${wrapperClass} ${wrapperClass}-up ${wrapperClass}--visible`;
    }
    if (window.scrollY >= posFooter) {
      scrollContrlDown.className = `${wrapperClass} ${wrapperClass}-down ${wrapperClass}--hidden`;
    } else if (document.documentElement.scrollTop < posFooter) {
      scrollContrlDown.className = `${wrapperClass} ${wrapperClass}-down ${wrapperClass}--visible`;
    }
  };

  const controlDown = () => {
    const pos = Math.round(window.scrollY / (window.innerHeight * 0.9));
    const next = ((pos) + 1);
    window.scroll({
      top: window.innerHeight * 0.9 * next,
      behavior: 'smooth',
    });
  };

  const controlUp = () => {
    const pos = Math.round(window.scrollY / (window.innerHeight * 0.9));
    const next = ((pos) - 1);
    window.scroll({
      top: window.innerHeight * 0.9 * next,
      behavior: 'smooth',
    });
  };

  return (
    <div id={`control-${to}`} className={`${wrapperClass} ${wrapperClass}-${to} ${wrapperClass}--visible`}>
      <FontAwesomeIcon id={`ico-${to}`} onClick={(to === 'down') ? controlDown : controlUp} className={`${wrapperClass}-ico`} icon={(to === 'down') ? faChevronDown : faChevronUp} />
    </div>
  );
};

ScrollControl.propTypes = {
  to: PropTypes.string.isRequired,
};

ScrollControl.defaultProps = {

};

export default ScrollControl;
