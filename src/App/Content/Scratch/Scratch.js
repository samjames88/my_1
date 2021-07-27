import css from './Scratch.module.css';
import cat from './alf.png';

const arrSCR = [
    {title: 'Абака', link: 'mental'},
    {title: 'Абака 2', link: 'mental2'},
    {title: 'Автобус', link: 'bus'},
    {title: 'Арканоид', link: 'arc'},
    {title: 'Аквариум', link: '4'},
    {title: 'Битва вертолётов', link: 'h2'},
    {title: 'Божья коровка', link: 'bog'},
    {title: 'Вертолёт', link: 'heli'},
    {title: 'Глюк', link: 'cg'},
    {title: 'Грут', link: 'groot'},
    {title: 'Единорог', link: 'corn'},
    {title: 'Звёзды', link: 'stars'},
    {title: 'Звёздные войны', link: 'stars2'},
    {title: 'Змейка', link: 'snake4'},
    {title: 'Калькулятор', link: 'calc'},
    {title: 'Карандаш', link: 'pen2'},
    {title: 'Карандаш-2', link: 'pen3'},
    {title: 'Кленовый лист', link: 'canada'},
    {title: 'Кленовый лист-2', link: 'canada2'},
    {title: 'Кот', link: 'cat'},
    {title: 'Краб-стрелок', link: 'crab'},
    {title: 'Лабиринт', link: 'labirint3'},
    {title: 'Летучие мыши', link: 'bats'},
    {title: 'Летучие мыши-2', link: 'bat2'},
    {title: 'Леталка', link: 'bird8'},
    {title: 'Машина', link: 'car'},
    {title: 'Музыка', link: 'music'},
    {title: 'Новый год', link: 'sng'},
    {title: 'Открытка', link: 'card'},
    {title: 'Отрезок', link: 'otrezok'},
    {title: 'Радуга', link: 'paint'},
    {title: 'Смайлик', link: 'smile'},
    {title: 'Спанч Боб', link: 'sponge'},
    {title: 'Спираль', link: 'spiral'},
    {title: 'Спираль-2', link: 'spiral2'},
    {title: 'Спираль-3', link: 'spiral3'},
    {title: 'Танк', link: 'tank'},
    {title: 'Танки', link: 'tanks'},
    {title: 'Теннис', link: 'ball'},
    {title: 'Теннис-2', link: 'tennis22'},
    {title: 'Трансформация', link: 'trans'},
    {title: 'Трансформация-2', link: 'trans2'},
    {title: 'Упс', link: 'oops'},
    {title: 'Фонарик', link: 'lupa'},
    {title: 'Футбол', link: 'fb'},
    {title: 'Цветной змей', link: 'color2'},
    {title: 'Цветные квадраты', link: 'cs'},
    {title: 'Цветок', link: 'flo'},
    {title: 'Шаги', link: 'steps'},
    {title: 'Flappy Bird', link: 'bird'}
]

function Scratch() {
    return (
        <div className={css.scratch}>
            <div className={css.cat_div}>
                <img className={css.img} src={cat} alt={cat} width='200'/>
                <br/>
                <span>Для запуска Scratch-проектов 2.0<br/>
                    требуется установленный flash-плеер</span>
            </div>
            {arrSCR.map((pic) => (
                <div className={css.item} key={pic.link}>
                    <a href={`./../../../scr/${pic.link}.swf`} target="_blank" rel="noreferrer">
                        <span className={css.text}><b>{pic.title}</b></span>
                    </a>
                </div>

            ))}
        </div>
    );
}

export default Scratch;