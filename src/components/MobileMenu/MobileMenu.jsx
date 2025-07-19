import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '#',
        submenu: ""
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about-us',
        submenu: ""
    },

    {
        id: 3,
        title: 'Programs',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Medical Guidance',
                link: '#',
            },
            {
                id: 32,
                title: 'Subsidized Surgeries',
                link: '#',
            },
            {
                id: 33,
                title: 'Pre and post-surgery',
                link: '#',
            },
            {
                id: 34,
                title: 'Medicines & Assistive Devices',
                link: '#',
            },
            {
                id: 35,
                title: 'Eye Camps & Screenings',
                link: '#',
            },
            {
                id: 36,
                title: 'Awareness & Advocacy',
                link: '#',
            }, 
        ]
    },
    {
        id: 4,
        title: 'Campaigns',
        link: '#',
        submenu: [
            {
                id: 41,
                title: 'Medical Guidance',
                link: '#',
            },
            {
                id: 42,
                title: 'Subsidized Surgeries',
                link: '#',
            },
            {
                id: 43,
                title: 'Pre and post-surgery',
                link: '#',
            },
            {
                id: 44,
                title: 'Medicines & Assistive Devices',
                link: '#',
            },
            {
                id: 45,
                title: 'Eye Camps & Screenings',
                link: '#',
            },
            {
                id: 46,
                title: 'Awareness & Advocacy',
                link: '#',
            },
        ]
    },
    {
        id: 5,
        title: 'Resources',
        link: '#',
        submenu: [
            {
                id: 51,
                title: 'FAQs on Eye Health',
                link: '/faqs',
            },
            {
                id: 52,
                title: 'Government Schemes & Support',
                link: '#',
            },
            {
                id: 53,
                title: 'Medical & Surgery Process Guide',
                link: '#',
            },
            {
                id: 54,
                title: 'Blog & News Updates',
                link: '#',
            },
            {
                id: 55,
                title: 'Photo Gallery',
                link: '#',
            },
        ]
    },
    {
        id: 6,
        title: 'Get Involved',
        link: '/get-involved',
        submenu: [
            {
                id: 61,
                title: 'Volunteer Opportunities',
                link: '/get-involved/volunteer-opportunities'
            },
            {
                id: 62,
                title: 'Corporate Partnerships',
                link: '/get-involved/corporate-partnerships'
            },
            {
                id: 63,
                title: 'Fundraising & Campaigns',
                link: '/get-involved/fundraising-and-campaigns'
            },
            {
                id: 64,
                title: 'Internship Programs',
                link: '/get-involved/internship-programs'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '#',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;