import style from './title.module.css';

export default function Title({labelText}) {

    return (
        <div className={style.box}>
            <ul className={style.title}>
                <li>{labelText}</li>
            </ul>
        </div>
    );
}