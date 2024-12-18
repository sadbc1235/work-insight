import style from './title.module.css';

export default function Title({labelText}) {
    return (
        <ul className={style.title}>
            <li>{labelText}</li>
        </ul>
    );
}