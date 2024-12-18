import Title from '../../title/title';
import style from './ofHomePage.module.css';

export default function OfHomePage() {

    return (
        <article className={style.ofHomePage}>
            <div></div>
            <Title labelText={'공식 홈페이지'} />
            <div></div>
            <div></div>
            <div className={style.imageWrap}>
                <img className={style.image} src="001.png" />
                <img className={style.image} src="002.png" />
                <img className={style.image} src="003.png" />
            </div>
            <div></div>
            <div></div>
            <div style={{height: '1px', background: 'rgb(217 217 217)'}}></div>
            <div></div>
        </article>
    );
}