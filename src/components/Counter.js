import { Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import{inc , dec , rnd} from '../actions'
import 'macro-css';

const Counter = () =>{
    const counter = useSelector(state=> state.counter);
    const dispatch = useDispatch();
    return (
        <div className="text-center mt-50">
            <h2>{counter}</h2>
                <Space>
                    <Button onClick={()=> dispatch(inc())} size={'large'}>INC</Button>
                    <Button onClick={()=> dispatch(dec())} size={'large'}>DEC</Button>
                    <Button onClick={()=> dispatch(rnd())} size={'large'}>RND</Button>
                </Space>
        </div>
    )
}

export default Counter;
