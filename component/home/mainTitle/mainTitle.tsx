import style from './mainTitle.module.css';

export default function MainTitle() {

    return (
        <article className={style.main}>
            <div className={style.mainImg}></div>
            <div className={style.mainTitle}>
                <div>
                    <h1>Work Insights</h1>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                        <path d="M0-.75h24v24H0z" fill="none"></path>
                    </svg>
                </div>
            </div>
        </article>
    );
}