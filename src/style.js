import React, { Component } from 'react';
import { default as minifyCssString } from 'minify-css-string'

class style extends Component {
    componentDidMount() {}
    render() {


const cssString = `
@font-face {
  font-family: bol;
  src: url('../fonts/bld.woff');
}
@font-face {
  font-family: mol;
  src: url('../fonts/Mol.woff');
}
@font-face {
  font-family: Mor;
  src: url('../fonts/Mor.woff');
}
body {
  line-height: 1.7;
  color: #8c92a0;
  font-weight: 300;
  font-family: bol;
  font-size: 16px; }

::-moz-selection {
  background: #000;
  color: #fff; }

::selection {
  background: #000;
  color: #fff; }

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
  a:hover {
    text-decoration: none; }
    .mb-2, .my-2{
      color: #fff;
    }
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
      background-color: #c2ff19;
      border: #c2ff19;
      color: #000;

    }
h1{
        font-weight: bold;
    font-family: Mor;
    letter-spacing: 1.5px;
 }
.text-black {
  color: #000; }

.site-wrap:before {
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  content: "";
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden; }

.offcanvas-menu .site-wrap {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  overflow: hidden; }
  .offcanvas-menu .site-wrap:before {
    opacity: 1;
    visibility: visible; }

.btn {
  text-transform: uppercase;
  position: relative;
  -webkit-transition: 0.2s all ease-in-out !important;
  -o-transition: 0.2s all ease-in-out !important;
  transition: 0.2s all ease-in-out !important;
  top: 0;
  letter-spacing: .05em; }
  .btn:hover, .btn:active, .btn:focus {
    outline: none;
    -webkit-box-shadow: none !important;
    box-shadow: none !important; }
  .btn.btn-secondary {
    background-color: #e6e7e9;
    border-color: #e6e7e9;
    color: #000; }
  .btn.btn-sm {
    font-size: 14px !important;
    padding: 10px 20px !important; }
  .btn.btn-primary {
        border-color: #fff;
    font-weight: 300;
    border-radius: 0;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 11px !important;
    padding: 13px !important;
    width: 13%;

    color: #fff; }
    .btn-primary {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
}
#gh .site-menu a:hover{
 color: #c2ff19;
}
.btn-primary:hover {
    color: #212D61;
      background-color: #c2ff19;
    border-color: #c2ff19;
}
  /*.btn:hover {
    -webkit-box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.9) !important;
    box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.9) !important;
    top: -2px; }
*/
.form-control {
  height: 43px; }
  .form-control:active, .form-control:focus {
    border-color: #7971ea; }
  .form-control:hover, .form-control:active, .form-control:focus {
    -webkit-box-shadow: none !important;
    box-shadow: none !important; }

.site-section {
  padding: 2.5em 0; }
  @media (min-width: 768px) {

    .site-section {
          padding: 8em 0; } }
  .site-section.site-section-sm {
    padding: 4em 0; }

.site-section-heading {
  font-size: 30px;
  color: #25262a;
  position: relative; }
  .site-section-heading:before {
    content: "";
    left: 0%;
    top: 0;
    position: absolute;
    width: 40px;
    height: 2px;
    background: #7971ea; }
  .site-section-heading.text-center:before {
    content: "";
    left: 50%;
    top: 80px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    width: 5%;
    height: 3px;
    background: #25262a; }
   
.border-top {
  border-top: 1px solid #edf0f5 !important; }

.site-footer {
  background-color: #212D61;
  padding: 4em 0; }
  .site-footer ul li {
    margin-bottom: 10px; }
    .site-footer ul li a {
      color: #5c626e; }
      .site-footer ul li a:hover {
        color: #7971ea; }
  .site-footer .footer-heading {
    font-size: 20px;
    color: #25262a; }

/* Navbar */
.site-navbar {
  background: #212D61;
  margin-bottom: 0px;
  z-index: 0;
  position: relative; }
  .site-navbar.transparent {
    background: transparent; }
  .site-navbar .site-navbar-top {
    padding-top: 20px;
    padding-bottom: 0;
    margin-bottom: 0px; }
    @media (min-width: 768px) {

      .site-navbar .site-navbar-top {
        padding-top: 40px;
        padding-bottom: 0; } }
  .site-navbar .site-search-icon a span {
    display: inline-block;
    margin-right: 10px; }
  .site-navbar .site-search-icon a:hover {
    text-decoration: none; }
  .site-navbar .site-logo a {
    text-transform: uppercase;
    color: #25262a;
    letter-spacing: .2em;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border: 2px solid #25262a; }
    .site-navbar .site-logo a:hover {
      text-decoration: none; }
  .site-navbar a {
    color: #868995; }
    .site-navbar a:hover {
      color: #3d3f45; }
  .site-navbar .icon {
    font-size: 20px; }
  .site-navbar .site-top-icons ul, .site-navbar .site-top-icons ul li {
    padding: 0;
    margin: 0;
    list-style: none; }
  .site-navbar .site-top-icons ul li {
    display: inline-block; }
    .site-navbar .site-top-icons ul li a {
      margin-right: 10px; }
      .site-navbar .site-top-icons ul li a.site-cart {
        display: block;
        position: relative; }
        .site-navbar .site-top-icons ul li a.site-cart .count {
          position: absolute;
          top: 0;
          right: 0;
          margin-right: -15px;
          margin-top: -20px;
          font-size: 13px;
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 50%;
          display: block;
          text-align: center;
          background: #7971ea;
          color: #fff;
          -webkit-transition: .2s all ease-in-out;
          -o-transition: .2s all ease-in-out;
          transition: .2s all ease-in-out; }
      .site-navbar .site-top-icons ul li a:hover .count {
        -webkit-box-shadow: 0 3px 10px -4px rgba(0, 0, 0, 0.3) !important;
        box-shadow: 0 3px 10px -4px rgba(0, 0, 0, 0.3) !important;
        margin-top: -22px; }
    .site-navbar .site-top-icons ul li:last-child a {
      padding-right: 0; }
  .site-navbar .site-top-icons ul .site-menu-toggle {
    font-size: 25px;
    position: relative;
    top: 15px;
    margin-left: 20px; }
  .site-navbar .site-navigation.border-bottom {
    border-bottom: 1px solid #f3f3f4 !important; }
  .site-navbar .site-navigation .site-menu {
    margin-bottom: 0; 
    padding: 0;}
    .site-navbar .site-navigation .site-menu .active > a {
      color: #7971ea; }
    .site-navbar .site-navigation .site-menu a {
      text-decoration: none !important;
      font-size: 15px;
      display: inline-block; }
    .site-navbar .site-navigation .site-menu > li {
      display: inline-block;
      padding: 10px 10px; }
      .site-navbar .site-navigation .site-menu > li > a {
            font-family: Mor;
    padding: 10px 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    font-size: 15px;
    text-decoration: none !important; }
        .site-navbar .site-navigation .site-menu > li > a:hover {
          color: #fff; }
    .site-navbar .site-navigation .site-menu .has-children {
      position: relative; }
      .site-navbar .site-navigation .site-menu .has-children > a {
        position: relative;
        padding-right: 20px; }
        .site-navbar .site-navigation .site-menu .has-children > a:before {
          position: absolute;
          content: "\e313";
          font-size: 16px;
          top: 50%;
          right: 0;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          font-family: 'icomoon'; }
      .site-navbar .site-navigation .site-menu .has-children .dropdown {
        visibility: hidden;
        opacity: 0;
        top: 100%;
        position: absolute;
        text-align: left;
        border-top: 2px solid #7971ea;
        -webkit-box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.05);
        box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.05);
        border-left: 1px solid #edf0f5;
        border-right: 1px solid #edf0f5;
        border-bottom: 1px solid #edf0f5;
        padding: 0px 0;
        margin-top: 20px;
        margin-left: 0px;
        background: #fff;
        -webkit-transition: 0.2s 0s;
        -o-transition: 0.2s 0s;
        transition: 0.2s 0s; }
        .site-navbar .site-navigation .site-menu .has-children .dropdown a {
          font-size: 16px;
          text-transform: none;
          letter-spacing: normal;
          -webkit-transition: 0s all;
          -o-transition: 0s all;
          transition: 0s all; }
        .site-navbar .site-navigation .site-menu .has-children .dropdown .active > a {
          color: #7971ea !important; }
        .site-navbar .site-navigation .site-menu .has-children .dropdown > li {
          list-style: none;
          padding: 0;
          margin: 0;
          min-width: 200px; }
          .site-navbar .site-navigation .site-menu .has-children .dropdown > li > a {
            padding: 9px 20px;
            display: block; }
            .site-navbar .site-navigation .site-menu .has-children .dropdown > li > a:hover {
              background: #f4f5f9;
              color: #25262a; }
          .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > a:before {
            content: "\e315";
            right: 20px; }
          .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > .dropdown, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > ul {
            left: 100%;
            top: 0; }
          .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:hover > a, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:active > a, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:focus > a {
            background: #f4f5f9;
            color: #25262a; }
      .site-navbar .site-navigation .site-menu .has-children a {
        text-transform: uppercase; }
      .site-navbar .site-navigation .site-menu .has-children:hover > a, .site-navbar .site-navigation .site-menu .has-children:focus > a, .site-navbar .site-navigation .site-menu .has-children:active > a {
        color: #7971ea; }
      .site-navbar .site-navigation .site-menu .has-children:hover, .site-navbar .site-navigation .site-menu .has-children:focus, .site-navbar .site-navigation .site-menu .has-children:active {
        cursor: pointer; }
        .site-navbar .site-navigation .site-menu .has-children:hover > .dropdown, .site-navbar .site-navigation .site-menu .has-children:focus > .dropdown, .site-navbar .site-navigation .site-menu .has-children:active > .dropdown {
          -webkit-transition-delay: 0s;
          -o-transition-delay: 0s;
          transition-delay: 0s;
          margin-top: 0px;
          visibility: visible;
          opacity: 1; }

.site-mobile-menu {
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background: #212D61;
  height: calc(100vh);
  -webkit-transform: translateX(110%);
  -ms-transform: translateX(110%);
  transform: translateX(110%);
  -webkit-box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out; }
  .offcanvas-menu .site-mobile-menu {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%); }
  .site-mobile-menu .site-mobile-menu-header {
    width: 100%;
    float: left;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px; }
    .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close {
      float: right;
      margin-top: 8px; }
      .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span {
        font-size: 40px;
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 1;
        cursor: pointer;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; }
        .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span:hover {
          color: #25262a; }
    .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo {
      float: left;
      margin-top: 10px;
      margin-left: 20px; }
      .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a {
        display: inline-block;
        text-transform: uppercase;
        color: #25262a;
        letter-spacing: .2em;
        font-size: 20px;
        padding-left: 10px;
        padding-right: 10px;
        border: 2px solid #25262a; }
        .site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a:hover {
          text-decoration: none; }
  .site-mobile-menu .site-mobile-menu-body {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    padding: 20px;
    height: calc(100vh - 52px);
    padding-bottom: 150px; }
  .site-mobile-menu .site-nav-wrap {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative; }
    .site-mobile-menu .site-nav-wrap a {
      padding: 10px 20px;
      display: block;
      position: relative;
      color: #212529; }
      .site-mobile-menu .site-nav-wrap a:hover {
        color: #7971ea; }
    .site-mobile-menu .site-nav-wrap li {
      position: relative;
      display: block; }
      .site-mobile-menu .site-nav-wrap li.active > a {
        color: #7971ea; }
    .site-mobile-menu .site-nav-wrap .arrow-collapse {
      position: absolute;
      right: 0px;
      top: 10px;
      z-index: 20;
      width: 36px;
      height: 36px;
      text-align: center;
      cursor: pointer;
      border-radius: 50%; }
      .site-mobile-menu .site-nav-wrap .arrow-collapse:hover {
        background: #f8f9fa; }
      .site-mobile-menu .site-nav-wrap .arrow-collapse:before {
        font-size: 12px;
        z-index: 20;
        font-family: "FontAwesome";
        content: "\f078";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotate(-180deg);
        -ms-transform: translate(-50%, -50%) rotate(-180deg);
        transform: translate(-50%, -50%) rotate(-180deg);
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; }
      .site-mobile-menu .site-nav-wrap .arrow-collapse.collapsed:before {
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); }
    .site-mobile-menu .site-nav-wrap > li {
      display: block;
      position: relative;
      float: left;
      width: 100%; }
      .site-mobile-menu .site-nav-wrap > li > a {
        padding-left: 20px;
        font-size: 20px; }
      .site-mobile-menu .site-nav-wrap > li > ul {
        padding: 0;
        margin: 0;
        list-style: none; }
        .site-mobile-menu .site-nav-wrap > li > ul > li {
          display: block; }
          .site-mobile-menu .site-nav-wrap > li > ul > li > a {
            padding-left: 40px;
            font-size: 16px; }
          .site-mobile-menu .site-nav-wrap > li > ul > li > ul {
            padding: 0;
            margin: 0; }
            .site-mobile-menu .site-nav-wrap > li > ul > li > ul > li {
              display: block; }
              .site-mobile-menu .site-nav-wrap > li > ul > li > ul > li > a {
                font-size: 16px;
                padding-left: 60px; }

/* Blocks */
.site-blocks-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }
  .site-blocks-cover, .site-blocks-cover .row {
    min-height: 480px; }
  .site-blocks-cover h1 {
    font-size: 30px;
    font-weight: 900;
    color: #fff; }
    @media (min-width: 768px) {
      .site-blocks-cover h1 {
        font-size: 50px; } }
  .site-blocks-cover p {
    color: #fff;
    font-size: 20px;
    line-height: 35px; }
  .site-blocks-cover .intro-text {
    font-size: 16px;
    line-height: 1.5; }

.site-blocks-1 {
  border-bottom: 1px solid #edf0f5; }
  .site-blocks-1 .divider {
    position: relative; }
    .site-blocks-1 .divider:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      right: 10px;
      background: #edf0f5; }
    .site-blocks-1 .divider:last-child:after {
      display: none; }
  .site-blocks-1 .icon span {
    position: relative;
    color: #7971ea;
    top: -10px;
    font-size: 50px;
    display: inline-block; }
  .site-blocks-1 .text h2 {
    color: #25262a;
    letter-spacing: .05em;
    font-size: 18px; }
  .site-blocks-1 .text p:last-child {
    margin-bottom: 0; }

.site-blocks-2 .block-2-item {
  display: block;
  position: relative; }
  .site-blocks-2 .block-2-item:before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -moz-linear-gradient(top, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.8) 99%, rgba(0, 0, 0, 0.8) 100%);
    background: -webkit-linear-gradient(top, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.8) 99%, rgba(0, 0, 0, 0.8) 100%);
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(18%, transparent), color-stop(99%, rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0.8)));
    background: -o-linear-gradient(top, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.8) 99%, rgba(0, 0, 0, 0.8) 100%);
    background: linear-gradient(to bottom, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.8) 99%, rgba(0, 0, 0, 0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000',GradientType=0 ); }
  .site-blocks-2 .block-2-item .image {
    position: relative;
    margin-bottom: 0;
    overflow: hidden; }
    .site-blocks-2 .block-2-item .image img {
      margin-bottom: 0;
      -webkit-transition: .3s all ease-in-out;
      -o-transition: .3s all ease-in-out;
      transition: .3s all ease-in-out; }
  .site-blocks-2 .block-2-item .text {
    z-index: 2;
    bottom: 0;
    padding-left: 20px;
    position: absolute;
    width: 100%; }
    .site-blocks-2 .block-2-item .text > span, .site-blocks-2 .block-2-item .text h3 {
      color: #fff; }
    .site-blocks-2 .block-2-item .text > span {
      font-size: 12px;
      letter-spacing: .1em;
      font-weight: 900; }
    .site-blocks-2 .block-2-item .text h3 {
      font-size: 40px; }
  .site-blocks-2 .block-2-item:hover .image img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1); }

.block-3 .owl-stage {
  padding-top: 40px;
  padding-bottom: 40px; }

.block-3 .owl-nav {
  position: relative;
  position: absolute;
  bottom: -50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }
  .block-3 .owl-nav .owl-prev, .block-3 .owl-nav .owl-next {
    position: relative;
    display: inline-block;
    padding: 20px;
    font-size: 30px;
    color: #5c626e; }
    .block-3 .owl-nav .owl-prev:hover, .block-3 .owl-nav .owl-next:hover {
      color: #25262a; }
    .block-3 .owl-nav .owl-prev.disabled, .block-3 .owl-nav .owl-next.disabled {
      opacity: .2; }

.block-4 {
  -webkit-box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.1);
  background: #fff; }
  .block-4 .block-4-text h3 {
    font-size: 20px;
    margin-bottom: 0; }
    .block-4 .block-4-text h3 a {
      text-decoration: none; }

.block-5 ul, .block-5 ul li {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.5; }

.block-5 ul li {
  padding-left: 30px;
  position: relative;
  margin-bottom: 15px;
  color: #25262a; }
  .block-5 ul li:before {
    top: 0;
    font-family: "icomoon";
    content: "";
    position: absolute;
    left: 0;
    font-size: 20px;
    line-height: 1;
    color: #7971ea; }
  .block-5 ul li.address:before {
    content: "\e8b4"; }
  .block-5 ul li.email:before {
    content: "\f0e0"; }
  .block-5 ul li.phone:before {
    content: "\f095"; }

.block-6 {
  display: block; }
  .block-6 img {
    display: block; }
  .block-6 h3 {
    font-size: 18px; }
  .block-6 p {
    color: #737b8a; }

.block-7 .form-group {
  position: relative; }

.block-7 .form-control {
  padding-right: 96px; }

.block-7 .btn {
  position: absolute;
  width: 80px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 3px; }

.block-8 .post-meta {
  color: #c4c7ce; }

.block-8 .block-8-sep {
  margin-left: 10px;
  margin-right: 10px; }

.site-blocks-table {
  overflow: auto; }
  .site-blocks-table .product-thumbnail {
    width: 200px; }
  .site-blocks-table thead th {
    padding: 30px;
    text-align: center;
    border-width: 1px !important;
    vertical-align: middle;
    color: #212529;
    font-size: 18px; }
  .site-blocks-table td {
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    color: #212529; }
  .site-blocks-table tbody tr:first-child td {
    border-top: 1px solid #7971ea !important; }

.site-block-order-table th {
  border-top: none !important;
  border-bottom-width: 1px !important; }

.site-block-order-table td, .site-block-order-table th {
  color: #000; }

.site-block-top-search {
  position: relative; }
  .site-block-top-search .icon {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); }
  .site-block-top-search input {
    padding-left: 40px;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out; }
    .site-block-top-search input:focus, .site-block-top-search input:active {
      padding-left: 25px; }

.site-block-27 ul, .site-block-27 ul li {
  padding: 0;
  margin: 0; }

.site-block-27 ul li {
  display: inline-block;
  margin-bottom: 4px; }
  .site-block-27 ul li a, .site-block-27 ul li span {
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc; }
  .site-block-27 ul li.active a, .site-block-27 ul li.active span {
    background: #7971ea;
    color: #fff;
    border: 1px solid transparent; }

#slider-range {
  height: 8px; }
  #slider-range .ui-slider-handle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none !important;
    background: #7971ea; }
    #slider-range .ui-slider-handle:focus, #slider-range .ui-slider-handle:active {
      outline: none; }
  #slider-range .ui-slider-range {
    background-color: #7971ea; }

.color-item .color {
  width: 14px;
  height: 14px; }

.block-16 figure {
  position: relative; }
  .block-16 figure .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 40px;
    width: 90px;
    height: 90px;
    background: #fff;
    display: block;
    border-radius: 50%;
    border: none; }
    .block-16 figure .play-button:hover {
      opacity: 1; }
    .block-16 figure .play-button > span {
      position: absolute;
      left: 55%;
      top: 50%;
      -webkit-transform: translate(-50%, -45%);
      -ms-transform: translate(-50%, -45%);
      transform: translate(-50%, -45%); }

.block-38 .block-38-header .block-38-heading {
  color: #000;
  margin: 0;
  font-weight: 300; }

.block-38 .block-38-header .block-38-subheading {
  color: #b3b3b3;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: .1em; }

.block-38 .block-38-header img {
  width: 120px;
  border-radius: 50%;
  margin-bottom: 20px; }
`
return (

      
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} />

                    );
    }
}
export default style;

