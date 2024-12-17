import MainTitle from '../../component/mainTitle/mainTitle';
import Title from '../../component/title/title';
import style from './home.module.css';

export default function page() {
    return (
        <section className={style.wrapper}>
            <MainTitle/>
            <article className={style.ofHomePage}>
                <Title labelText={'공식 홈페이지'}/>
                <div className={style.box}>
                    <img style={{width: '100%', margin: '10px 0px'}} src="https://lh5.googleusercontent.com/LKRGwRKJDilcfnyLCPjiwysC8luFCi9Qr0dwEdAxa5N3eytHqgucrDIW3pom6dUkoUb7J0BV99zxpPE92369B17HxTmzz2gozeR7dd7_rRSVr5VPi1a970ZXjHXz1PRJoQ=w1280" />
                    <img style={{width: '100%', margin: '10px 0px'}} src="https://lh5.googleusercontent.com/LKRGwRKJDilcfnyLCPjiwysC8luFCi9Qr0dwEdAxa5N3eytHqgucrDIW3pom6dUkoUb7J0BV99zxpPE92369B17HxTmzz2gozeR7dd7_rRSVr5VPi1a970ZXjHXz1PRJoQ=w1280" />
                    <img style={{width: '100%', margin: '10px 0px'}} src="https://lh5.googleusercontent.com/LKRGwRKJDilcfnyLCPjiwysC8luFCi9Qr0dwEdAxa5N3eytHqgucrDIW3pom6dUkoUb7J0BV99zxpPE92369B17HxTmzz2gozeR7dd7_rRSVr5VPi1a970ZXjHXz1PRJoQ=w1280" />
                </div>
            </article>
        </section>
    )
}