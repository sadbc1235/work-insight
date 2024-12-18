import Title from '../../title/title';
import style from './workSite.module.css';

export default function WorkSite() {

    return (
        <article className={style.container}>
            <div></div>
            <Title labelText={'업무 보조 사이트'} />
            <div></div>
            <div></div>
            <div className={style.cardWrap}>
                <div className={style.card}>
                    <img className={style.image} src="001-2.png" />
                    <p>
                        출퇴근 기록 및 기안서 상신과 같은 반복적인 서면 업무를 진행할 수 있으며, 모바일 기반의 유연한 시스템으로 어디서든 간단 업무 처리가 가능
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.image} src="002-2.png" />
                    <p>
                        제품 출고 및 입고와 같은 물류 업무를 관리할 수 있도록 지원하는 택배 등록 사이트
                    </p>
                </div>
                <div className={style.card}>
                    <img className={style.image} src="003-2.png" />
                    <p>
                        고객에게 문자 안내 서비스가 필요할 경우 활용 할 수 있는 사이트
                    </p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div style={{height: '1px', background: 'rgb(217 217 217)'}}></div>
            <div></div>
        </article>
    );
}