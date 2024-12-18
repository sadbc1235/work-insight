import MainBanner from '../../component/home/mainBanner/mainBanner';
import MainTitle from '../../component/home/mainTitle/mainTitle';
import OfHomePage from '../../component/home/ofHomePage/ofHomePage';
import Store from '../../component/home/store/store';
import WorkSite from '../../component/home/workSite/workSite';
import style from './home.module.css';

export default function page() {
    return (
        <section className={style.wrapper}>
            <MainTitle/>
            <OfHomePage/>
            <WorkSite/>
            <Store/>
            <MainBanner/>
        </section>
    )
}