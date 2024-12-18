import Title from '../../title/title';
import style from './mainBanner.module.css';

export default function MainBanner() {

    return (
        <article className={style.container}>
            <div></div>
            <img className={style.image} src="mainBanner.png" />
            <div></div>
            <div></div>
            <div style={{height: '1px', background: 'rgb(217 217 217)'}}></div>
            <div></div>
        </article>
    );
}