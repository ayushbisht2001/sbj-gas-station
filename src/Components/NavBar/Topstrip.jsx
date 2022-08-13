import React from 'react'
import './NavBar.scss'
export default function Topstrip() {
    return (
        <div className="topStrip">
            <ul className="leftLinks">
                <li>
                    <a className="topSitemap" href="sitemap.htm">Sitemap</a>
                </li>
                <li>
                    <a className="topFeedback" href="feedback.htm">Feedback </a>
                </li>
                <li>
                    <a className="internalLogin" title="Media Login : External link that opens in a new window" href="https://meacms.mea.gov.in/medialogin.aspx" target="_blank" rel="noreferrer">Media Login</a>
                </li>
            </ul>
            <ul className="rightLinks">
                <li>
                    <a className="skipToContent" tabIndex="1" href="#contentStart">Skip to main content</a>
                </li>
                <li>
                    <a className="screenReader" href="screen-reader-access.htm">Screen Reader Access</a>
                </li>
            </ul>
        </div>
    )
}
