import './Content.css';
import {Switch, Route} from 'react-router-dom';
import Unity from './Unity/Unity';
import Android from './Android/Android';
import Scratch from './Scratch/Scratch';
import Lrm from './Lrm/Lrm';
import Python from './Python/Python';
import Pc from './Pc/Pc';
import Arduino from './Arduino/Arduino';
import Fre from './Fre/Fre';

function Content() {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/" component={Unity}/>
                <Route path="/unity" component={Unity}/>
                <Route path="/android" component={Android}/>
                <Route path="/scratch" component={Scratch}/>
                <Route path="/lrm" component={Lrm}/>
                <Route path="/python" component={Python}/>
                <Route path="/pc" component={Pc}/>
                <Route path="/arduino" component={Arduino}/>
                <Route path="/fre" component={Fre}/>
            </Switch>
        </div>
    );
}

export default Content;