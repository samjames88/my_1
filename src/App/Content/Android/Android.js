import css from './Android.module.css';

const arrANDROID = [
    {image: 'gb_andr', title: 'Gold Boot', link:'spngl.butsa'},
    {image: 'gb2_andr', title: 'Gold Boot 2', link:'spngl.gb2'},
    {image: 'rb2_andr', title: 'Roll-a-Ball 2', link:'spngl.roll'},
    {image: 'pp_andr', title: 'Parrot-n-Ptero', link:'spngl.fb'},
    {image: 'combo_andr', title: 'Combo', link:'spngl.combo'},
    {image: 'cr_andr', title: 'Crash Rocket', link: 'sashok.crashrocket'}
]

function Android() {
    return (
        <div className={css.android}>
            {arrANDROID.map((pic) => (
                <div className={css.item} key={pic.title}>
                    <a href={`https://play.google.com/store/apps/details?id=com.${pic.link}`}
                       target="_blank" rel="noreferrer">
                        <img className={css.img}
                             title={pic.title}
                             src={`./../../../img/img_android/${pic.image}.png`}
                             alt={pic.title}/>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Android;