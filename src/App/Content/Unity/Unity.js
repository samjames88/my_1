import css from './Unity.module.css';

const arrUNITY = [
    {link: 'jet'},
    {link: 'piano'},
    {link: 'helicopter'},
    {link: 'plane'},
    {link: 'car'},
    {link: 'combo'},
    {link: 'parrot_and_ptero'},
    {link: 'pushka'},
    {link: 'roll_a_ball_2'},
    {link: 'cubes'},
    {link: 'space_jet'},
    {link: 'space_jet_2'},
    {link: 'quadro'},
    {link: 'tank'},
    {link: 'pool'},
    {link: 'gold_boot'},
    {link: 'gold_boot_2'},
    {link: 'snake'},
    {link: 'magic_hero'},
    {link: 'lesson_25'},
    {link: 'crash_rocket'},
    {link: 'sort_track'},
    {link: 'helicopter2'},
    {link: 'tennis'}
]

function Unity() {
    return (
        <div className='unity'>
            {arrUNITY.map((pic) => (
                <div className={css.item} key={pic.link}>
                    <a href={`./../../../webgl/${pic.link}`} target="_blank" rel="noreferrer">
                        <img className={css.img}
                             title={pic.link}
                             src={`./../../../img/img_unity/${pic.link}.png`}
                             alt={pic.link}/>
                    </a>
                </div>
            ))}
        </div>

    );
}


export default Unity;