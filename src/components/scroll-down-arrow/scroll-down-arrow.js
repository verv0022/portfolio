import React from 'react'
import './scroll-down-arrow.css'
import { FaChevronDown } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ScrollDownArrow = () => {

  return (
    <FaChevronDown className="down-arrow" onClick={() => scrollTo('.projects-content')} />
  );
};

export default ScrollDownArrow