import React from 'react';
import localStyles from '../../scss/pages/Leadership.module.scss';

function Leadership() {
    return (
        <div className={localStyles["leadership"]}>
            <h2>Executive Profiles</h2>
            <ul>
                <li>
                    {/* Ferry */}
                    <img src="images/Leadership/avatar_Ferry.jpg" alt="Ferry" />
                </li>
                <li>
                    {/* Mariana */}
                    <img src="images/Leadership/avatar_Mariana.jpg" alt="Mariana" />
                </li>
                <li>
                    {/* Tan */}
                    <a href="https://www.linkedin.com/in/tanvu/" target="_blank">
                        <img src="images/Leadership/avatar_Tan.jpg" alt="Tan" />
                    </a>
                    <a href="https://www.linkedin.com/in/tanvu/" target="_blank">Nhat Tan Vu (CTO)</a>
                </li>
                <li>
                    {/* Khang */}
                    <img src="images/Leadership/avatar_Khang.jpg" alt="Khang" />
                </li>
            </ul>
        </div>
    )
}

export default Leadership;