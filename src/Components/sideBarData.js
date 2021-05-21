import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IOIcons from "react-icons/io"

export const sideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    },
    {
        title: 'FAQs',
        path: '/faqs',
        icon: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillHome />,
        cname: 'nav-text'
    }
];