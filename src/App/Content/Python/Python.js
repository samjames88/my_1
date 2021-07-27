import css from './Python.module.css';

const arrPTN = [
    {image: 'found', title: 'Поиск Сокровищ'},
    {image: 'genPr', title: 'Генератор Предложений'},
    {image: 'turtle', title: 'Черепаха Начало'},
    {image: 'robot', title: 'Робот'},
    {image: 'itland', title: 'АйТиЛандия'},
    {image: 'logo', title: 'Логотип'},
    {image: 'cubes', title: 'Цветные Квадраты'},
    {image: 'figuresColor', title: 'Цветные Фигуры'},
    {image: 'fill', title: 'Закрашивание'},
    {image: 'house', title: 'Цветной Дом'},
    {image: 'dist', title: 'Вычисление Дистанции'},
    {image: 'snow', title: 'Снежинка'},
    {image: 'paint1', title: 'Paint'},
    {image: '21', title: 'Двадцать Один'},
    {image: 'ColorRadio', title: 'Переключение Фонов'},
    {image: 'MagicPaint', title: 'Рисовалка'},
    {image: 'xo', title: 'Крестики Нолики'},
    {image: 'snake', title: 'Змейка'},
    {image: 'circles', title: 'Цветные Круги'},
    {image: 'circles9', title: '9 Цветных Кругов'},
    {image: 'niceCircles', title: 'Круговое Зацикливание'},
    {image: 'name', title: ' Цветные Имена'},
    {image: 'names', title: 'Цветные Имена 2'},
    {image: 'task1', title: 'Задание 1'},
    {image: 'task2', title: 'Задание 2'}

]

function Python() {
    return (
        <div className="python">
            {arrPTN.map((pic) => (
                <div className={css.item} key={pic.image}>
                    <a href={`./../../../img/img_ptn/${pic.image}.png`} target="_blank" rel="noreferrer">
                        <span className={css.text}><b>{pic.title}</b></span>
                        <br/>
                        <img className={css.img}
                             title={pic.title}
                             src={`./../../../img/img_ptn/${pic.image}.png`}
                             alt={pic.title}/>
                    </a>
                </div>

            ))}
        </div>
    );
}

export default Python;