import css from './Lrm.module.css';

const arrLRM = [
    {image: '111', title: '111', link:'111.lxf'},
    {image: '222', title: '222', link:'222.lxf'},
    {image: '333', title: '333', link:'333.lxf'},
    {image: '444', title: '444', link:'444.lxf'},
    {image: '555', title: '555', link:'555.lxf'},
    {image: '666', title: '666', link: '666.lxf'},
    {image: '777', title: '777', link: '777.lxf'},
    {image: '888', title: '888', link: '888.lxf'},
    {image: '999', title: '999', link: '999.lxf'},
    {image: '1010', title: '1010', link: '1010.lxf'},
    {image: '1111', title: '1111', link: '1111.lxf'},
    {image: '1212', title: '1212', link: '1212.lxf'},
    {image: 'compact', title: 'Compact Bot', link: 'compact.lxf'},
    {image: 'moto', title: 'Moto', link: 'moto.zip'},
    {image: 'Speed_Car', title: 'Speed Car', link: 'speed_car.lxf'},
    {image: 'helicopter', title: 'Helicopter', link: 'helicopter.lxf'},
    {image: 'real_car', title: 'Real Car', link: 'real_car_3.lxf'},
    {image: 'insect', title: 'Insect', link: 'Insect.pdf'},
    {image: 'watch', title: 'Watch', link: 'watch.pdf'},
    {image: 'wall-e', title: 'Wall-E', link: 'wall-e.pdf'},
    {image: 'squirel', title: 'Squirel', link: 'squirel.lxf'},
    {image: 'floor', title: 'Floor Washer', link: 'floor-washer.pdf'},
    {image: 'dragster', title: 'Dragster', link: 'Dragster1.lxf'},
    {image: 'racing_car', title: 'Raicing Car', link: 'racing-car.pdf'},
    {image: 'track', title: 'Track', link: '1717.lxf'},
    {image: 'real_car_2', title: 'Real Car 2', link: 'real_car_2.lxf'},
    {image: 'security', title: 'Security', link: 'ohrannik.pdf'},
    {image: 'cb22', title: 'CB 22', link: 'CB22.lxf'},
    {image: 'tb', title: 'Toddle Bot', link: 'tb.pdf'},
    {image: 'gymnast', title: 'Gymnast', link: 'gymnast.pdf'}
]

function Lrm() {
    return (
        <div className="lrm">
            {arrLRM.map((pic) => (
                <div className={css.item} key={pic.link}>
                    <a href={`./../../../lrm/${pic.link}`} target="_blank" rel="noreferrer">
                        <img className={css.img}
                             title={pic.title}
                             src={`./../../../img/img_lrm/${pic.image}.png`}
                             alt={pic.title}/>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Lrm;