import React, { useState, useEffect, useRef, Children } from 'react'
import { Link } from "react-router-dom";
import OutsideClick from "./OutsideClick";
import dashbord from "../../assest/img/speedometer.png"
import { AlignJustify } from 'react-feather';
import "../../assest/css/style.css";
import "../../assest/css/components.css"




function Header({children}) {
    const sidebarColorRef = useRef(null)
    const selectLayoutRef = useRef(null)
    const colorThemeRef = useRef(null)
    const navStickyRef = useRef(null)
    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef);

    console.log(boxOutsideClick);

    useEffect(() => {
        document.body.classList.add(
            "light",
            "light-sidebar",
            "theme-white"
        );
    }, []);

    


    const [isPTActive, setPTActive] = useState(false)
    const [isPATActive, setPATActive] = useState(false)
    const [isPFTActive, setPFTActive] = useState(false)
    const [isPTTActive, setPTTActive] = useState(false)
    const [isPRTActive, setPRTActive] = useState(false)
    const [isHSTActive, setHSTActive] = useState(false)
    const [isSliderMini, setSliderMini] = useState(false)
    const [isShowSettingPanel, setShowSettingPanel] = useState(false)

    // For People Dropdown
    const PToggle = () => {
        if (isPTActive == true) {
            setPFTActive(false)
        }
        if (isPATActive == true) {
            setPATActive(false)
        }
        if (isPTTActive == true) {
            setPTTActive(false)
        }
        setPTActive(!isPTActive)
    }
    // For Attendance people Dropdown
    const PAToggle = () => {
        setPATActive(!isPATActive)
    }
    // For forms people  Dropdown
    const PFToggle = () => {
        console.log(isPFTActive);
        setPFTActive(!isPFTActive)
    }
    // For forms people  Dropdown
    const PTToggle = () => {
        setPTTActive(!isPTTActive)
    }
    // For Payroll Dropdown
    const PRToggle = () => {
        setPRTActive(!isPRTActive)
    }
    // For Help/Support Dropdown
    const HSToggle = () => {
        setHSTActive(!isHSTActive)
    }
    // slider is minimize of not
    const sliderMini = () => {
        document.body.classList.toggle(
            "sidebar-mini"
        );
    }

    // slider is minimize of not
    const showSettingPanel = () => {
        setShowSettingPanel(!isShowSettingPanel)
    }

    // select layout either dark(2) or white(1) 
    const selectLayout = (e) => {
        if (e.target.value == "2") {
            document.body.classList.add(
                "dark",
                "dark-sidebar",
                "theme-black"
            );
            document.body.classList.remove(
                "light",
                "light-sidebar",
                "theme-white"
            );
            e.target.checked = true;
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
            selectLayoutRef.current.innerHTML = '<label class="selectgroup-item"><input type="radio" name="value" class="selectgroup-input-radio select-layout" value="1" ><span class="selectgroup-button">Light</span></label><label class="selectgroup-item"><input type="radio" name="value" class="selectgroup-input-radio select-layout" value="2" checked><span class="selectgroup-button">Dark</span></label>'
        } else {
            document.body.classList.remove(
                "dark",
                "dark-sidebar",
                "theme-black"
            );
            document.body.classList.add(
                "light",
                "light-sidebar",
                "theme-white"
            );
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "black")
            e.target.checked = true;
        }
    }

    const sidebarColor = (e) => {
        if (e.target.value == "2") {
            document.body.classList.add(
                "dark-sidebar"
            );
            document.body.classList.remove(
                "light-sidebar"
            );
            // e.target.checked = true;
            sidebarColorRef.current.innerHTML = '<label class="selectgroup-item"><input type="radio" name="icon-input" id="sidebar-color" class="selectgroup-input select-sidebar" value="1"><span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span></label><label class="selectgroup-item"><input type="radio" name="icon-input" id="sidebar-color" class="selectgroup-input select-sidebar" value="2" checked><span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span></label>'
        } else {
            document.body.classList.remove(
                "dark-sidebar"
            );
            document.body.classList.add(
                "light-sidebar"
            );
        }
    }

    const colorTheme = (e) => {
        if (e.target.className == "cyan") {
            document.body.classList.add(
                "theme-cyan"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-orange",
                "theme-green",
                "theme-red",
                "theme-white",
                "theme-purple"
            );
            // console.log(colorThemeRef.current.innerHTML)
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" class="active"><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red"><div class="red"></div></li></ul>'
        } else if (e.target.className == "purple") {
            document.body.classList.add(
                "theme-purple"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-orange",
                "theme-green",
                "theme-red",
                "theme-white",
                "theme-cyan"
            );
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple" class="active"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red"><div class="red"></div></li></ul>'
        } else if (e.target.className == "black") {
            document.body.classList.add(
                "theme-black"
            );
            document.body.classList.remove(
                "theme-orange",
                "theme-green",
                "theme-red",
                "theme-white",
                "theme-purple",
                "theme-cyan"
            );
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black" class="active"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red"><div class="red"></div></li></ul>'
        } else if (e.target.className == "orange") {
            document.body.classList.add(
                "theme-orange"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-green",
                "theme-red",
                "theme-white",
                "theme-purple",
                "theme-cyan"
            );
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange" class="active"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red"><div class="red"></div></li></ul>'
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
        } else if (e.target.className == "green") {
            document.body.classList.add(
                "theme-green"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-orange",
                "theme-red",
                "theme-white",
                "theme-purple",
                "theme-cyan"
            );
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green" class="active"><div class="green"class="active" ></div></li><li title="red"><div class="red"></div></li></ul>'
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
        } else if (e.target.className == "red") {
            document.body.classList.add(
                "theme-red"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-orange",
                "theme-green",
                "theme-white",
                "theme-purple",
                "theme-cyan"
            );
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "white")
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" ><div class="white"></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red" class="active"><div class="red"></div></li></ul>'
        } else if (e.target.className == "white") {
            document.body.classList.add(
                "theme-white"
            );
            document.body.classList.remove(
                "theme-black",
                "theme-orange",
                "theme-green",
                "theme-red",
                "theme-purple",
                "theme-cyan"
            );
            var ele = document.getElementById("AlignJustify")
            ele.setAttribute("stroke", "black")
            colorThemeRef.current.innerHTML = '<ul class="choose-theme list-unstyled mb-0"><li title="white" class="active"><div class="white" ></div></li><li title="cyan" ><div class="cyan"></div></li><li title="black"><div class="black"></div></li><li title="purple"><div class="purple"></div></li><li title="orange"><div class="orange"></div></li><li title="green"><div class="green"></div></li><li title="red"><div class="red"></div></li></ul>'
        }
    }

    const navSticky = () => {
        console.log("hello")
        navStickyRef.current.classList.toggle("sticky")
    }

    const restore = () => {
        document.body.classList.add(
            "light",
            "light-sidebar",
            "theme-white"
        );
        document.body.classList.remove(
            "dark",
            "dark-sidebar",
            "theme-black",
            "theme-cyan",
            "theme-black",
            "theme-orange",
            "theme-green",
            "theme-red",
            "theme-purple"
        )
        var ele = document.getElementById("AlignJustify")
        ele.setAttribute("stroke", "black")
    }

    return (
        <>
            {/* <div className="loader"></div>{isSliderMini ? "light light-sidebar sidebar-mini" : "light light-sidebar"} */}
            <div id="app" className="light light-sidebar">
                <div className="main-wrapper main-wrapper-1">
                    <div className="navbar-bg"></div>
                    <nav className="navbar navbar-expand-lg  main-navbar" ref={navStickyRef}>
                        <div className="form-inline mr-auto">
                            <ul className="navbar-nav mr-3">
                                <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg
									collapse-btn" onClick={() => sliderMini()}><AlignJustify id="AlignJustify" color="black" />
                                </a></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav navbar-right">

                            {/* require to edit */}
                            <h6 style={{ marginTop: "10px" }}>Sanket Parekh</h6>
                            <li className="dropdown"><a href="#" data-toggle="dropdown"
                                className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
                                    className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block"></span></a>
                                <div className="dropdown-menu dropdown-menu-right pullDown">
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-sidebar sidebar-style-2">
                        <aside id="sidebar-wrapper">
                            <div className="sidebar-brand">
                                <a href="#"> <img alt="image" src="data:image/png;base64,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" className="header-logo" /> <span
                                    className="logo-name">Memighty</span>
                                </a>

                            </div>
                            <ul className="sidebar-menu">
                                <li className="dropdown">
                                    {/* <a href="<?php echo base_url(); ?>Welcome/dashboard" className="nav-link"><img style={{ height: "20px", width: "20px", marginRight: "10px" }} alt="image" src={dashbord} className="header-logo" /><span>Dashboard</span></a> */}
                                    <Link
                                        to={"/Welcome/dashboard"}
                                        className="nav-link"
                                    >
                                        <img style={{ height: "20px", width: "20px", marginRight: "10px" }} alt="image" src={dashbord} className="header-logo" /><span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className={isPTActive ? "menu-toggle nav-link has-dropdown toggled" : "menu-toggle nav-link has-dropdown"} onClick={() => PToggle()}><img style={{ height: "20px", width: "20px", marginRight: "10px" }} alt="image" src="data:image/png;base64,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" className="header-logo" /><span style={{ margineLft: "10px" }}>People</span></a>
                                    <ul className={isPTActive ? "dropdown-menu show" : "dropdown-menu"}>
                                        <li className="dropdown">
                                            <a href="#" className="menu-toggle nav-link has-dropdown" onClick={() => PAToggle()}>Attendence</a>
                                            <ul className={isPTActive ? (isPATActive ? "dropdown-menu show" : "dropdown-menu") : "dropdown-menu"}>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/payrollreport"}
                                                        className="nav-link"
                                                    >
                                                        Tabular View
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown" >
                                            <a href="#" className="menu-toggle nav-link has-dropdown" onClick={() => PFToggle()}>Forms</a>
                                            <ul className={isPTActive ? (isPFTActive ? "dropdown-menu show" : "dropdown-menu") : "dropdown-menu"}>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/forgot_thumb_view"}
                                                        className="nav-link"
                                                    >
                                                        Attendance Adjustment
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/Late_Come"}
                                                        className="nav-link"
                                                    >
                                                        Late Come
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/Overtime_Consideration"}
                                                        className="nav-link"
                                                    >
                                                        Over Time Consideration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/travelform"}
                                                        className="nav-link"
                                                    >
                                                        Travel Request
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="menu-toggle nav-link has-dropdown" onClick={() => PTToggle()}><span>Time Off</span></a>
                                            <ul className={isPTActive ? (isPTTActive ? "dropdown-menu show" : "dropdown-menu") : "dropdown-menu"}>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/leaveoff"}
                                                        className="nav-link"
                                                    >
                                                        Leaves
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"/FormsData/holiday_view"}
                                                        className="nav-link"
                                                    >
                                                        Holidays
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className={isPRTActive ? "menu-toggle nav-link has-dropdown toggled" : "menu-toggle nav-link has-dropdown"} onClick={() => PRToggle()}><img style={{ height: "20px", width: "20px", marginRight: "10px" }} alt="image" src="https://cdn.techjockey.com/web/assets/images/techjockey/products/11126_zoho-payroll.jpg?d=300" className="header-logo" /><span>Payroll</span></a>
                                    <ul className={isPRTActive ? "dropdown-menu show" : "dropdown-menu"}>
                                        <li>
                                            <Link
                                                to={"/FormsData/salaryhistory"}
                                                className="nav-link"
                                            >
                                                History
                                            </Link>
                                        </li>
                                        {/* <li><a className="nav-link" href="<?php echo base_url(); ?>FormsData/salaryhistory">All History</a></li> */}

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className={isHSTActive ? "menu-toggle nav-link has-dropdown toggled" : "menu-toggle nav-link has-dropdown"} onClick={() => HSToggle()}><img style={{ height: "20px", width: "20px", marginRight: "10px" }} alt="image" src="data:image/png;base64,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" className="header-logo" /><span>Help/Support</span></a>
                                    <ul className={isHSTActive ? "dropdown-menu show" : "dropdown-menu"}>
                                        <li>
                                            <Link
                                                to={"/Welcome/view_bugs"}
                                                className="nav-link"
                                            >
                                                Issue/Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={"/Welcome/supportvideo"}
                                                className="nav-link"
                                            >
                                                Support Videos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={"/Welcome/whatsnewpage"}
                                                className="nav-link"
                                            >
                                                What's New
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    {/* Main content */}
                    <div className="main-content" style={{ minHeight: "874px" }}      >
                        <section className="section">
                            {children}
                        </section>
                        <div 
                            className={boxOutsideClick ? "settingSidebar" :(isShowSettingPanel ? "settingSidebar showSettingPanel" : "settingSidebar")}
                            ref={boxRef}
                         >
                            <a href="#" className="settingPanelToggle" onClick={() => showSettingPanel()}> <i className="fa fa-spin fa-cog"></i>
                            </a>
                            <div className="settingSidebar-body ps-container ps-theme-default" >
                                <div className=" fade show active">
                                    <div className="setting-panel-header">Setting Panel
                                    </div>
                                    <div className="p-15 border-bottom">
                                        <h6 className="font-medium m-b-10">Select Layout</h6>
                                        <div className="selectgroup layout-color w-50" onClick={(e) => selectLayout(e)} ref={selectLayoutRef}>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="value" value="1" className="selectgroup-input-radio select-layout" checked />
                                                <span className="selectgroup-button">Light</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="value" value="2" className="selectgroup-input-radio select-layout" />
                                                <span className="selectgroup-button">Dark</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-15 border-bottom">
                                        <h6 className="font-medium m-b-10">Sidebar Color</h6>
                                        <div className="selectgroup selectgroup-pills sidebar-color" onClick={(e) => sidebarColor(e)} ref={sidebarColorRef}>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="icon-input" value="1" id="sidebar-color" className="selectgroup-input select-sidebar" checked />
                                                <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                                                    data-original-title="Light Sidebar"><i className="fas fa-sun"></i></span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="icon-input" value="2" id="sidebar-color" className="selectgroup-input select-sidebar" />
                                                <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                                                    data-original-title="Dark Sidebar"><i className="fas fa-moon"></i></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-15 border-bottom">
                                        <h6 className="font-medium m-b-10">Color Theme</h6>
                                        <div className="theme-setting-options" onClick={(e) => colorTheme(e)} ref={colorThemeRef}>
                                            <ul className="choose-theme list-unstyled mb-0">
                                                <li title="white" className="active">
                                                    <div className="white"></div>
                                                </li>
                                                <li title="cyan">
                                                    <div className="cyan"></div>
                                                </li>
                                                <li title="black">
                                                    <div className="black"></div>
                                                </li>
                                                <li title="purple">
                                                    <div className="purple"></div>
                                                </li>
                                                <li title="orange">
                                                    <div className="orange"></div>
                                                </li>
                                                <li title="green">
                                                    <div className="green"></div>
                                                </li>
                                                <li title="red">
                                                    <div className="red"></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-15 border-bottom">
                                        <div className="theme-setting-options" >
                                            <label className="m-b-0" >
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                                                    id="mini_sidebar_setting" />
                                                <span className="custom-switch-indicator" onClick={() => sliderMini()}></span>
                                                <span className="control-label p-l-10" onClick={() => sliderMini()}>Mini Sidebar</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-15 border-bottom">
                                        <div className="theme-setting-options">
                                            <label className="m-b-0" >
                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                                                    id="sticky_header_setting" />
                                                <span className="custom-switch-indicator" onClick={() => navSticky()}></span>
                                                <span className="control-label p-l-10" onClick={() => navSticky()}>Sticky Header</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                                        <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme" onClick={() => restore()}>
                                            <i className="fas fa-undo"></i> Restore Default
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header