'use client'
import style from './nav.module.css';

export default function Nav() {

    return (
        <nav className={style.navCom}>
            <div style={{position: 'relative'}}>
                <div className={style.titleBar}></div>
                <span className={style.title}>Work Insights</span>
            </div>
            <ul>
                <li>
                    <div className={`${style.menuItem} ${style.active}`}>HTC VIVE 업무자료</div>
                </li>
                <li>
                    <div className={style.menuItem}>Logitech VC 업무자료</div>
                </li>
                <li>
                    <div className={style.menuItem}>Sense Robot Go 업무자료</div>
                </li>
            </ul>
        </nav>
    );
}