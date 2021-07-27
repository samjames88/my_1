import css from './Pc.module.css';

function Pc() {
    return (
        <div className="pc">
            {Array(15).fill().map((_,index) => (
                <div className={css.item} key={(index+1).toString()}>
                    <a href={`./../../../img/img_pc/pic${index+1}.png`} target="_blank" rel="noreferrer">
                        <span className={css.text}><b>{`Picture ${index+1}`}</b></span>
                        <br/>
                        <img className={css.img}
                             title={`Picture ${index+1}`}
                             src={`./../../../img/img_pc/pic${index+1}.png`}
                             alt={`Pict ${index+1}`}/>
                    </a>
                </div>

            ))}
        </div>
    );
}

export default Pc;