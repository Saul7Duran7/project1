import React, { Component } from 'react';
import React, {Component} from 'react'
import TVShow from '../../components/tvshow/tvshow';
import PropTypes from 'prop-types';

import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}