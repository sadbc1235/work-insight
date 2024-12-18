import Title from '../../title/title';
import style from './store.module.css';

export default function Store() {

    return (
        <article className={style.container}>
            <div></div>
            <Title labelText={'store'} />
            <div></div>
            <div></div>
            <div className={style.cardWrap}>
                <div className={style.card}>
                    <img className={style.image} src="001-3.png" />
                </div>
                <div className={style.card}>
                    <img className={style.image} src="002-3.png" />
                </div>
                <div className={style.card}>
                    <img className={style.image} src="003-3.png" />
                </div>
            </div>
            <div></div>
            <div></div>
            <div style={{height: '1px', background: 'rgb(217 217 217)'}}></div>
            <div></div>
        </article>
    );
}