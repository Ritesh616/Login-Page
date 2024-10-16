import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Purchase() {
    const navigate = useNavigate();

    const purchaseAgent = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.post("http://localhost:3000/crud", {}, {
            headers: { Authorization: token }
        });
        if (response.data.status === 'ok') {
            navigate('/dashboard');
            alert('Agent purchased: ' + response.data.agentID);
           
        }
    };

    return (
        <div className="purchase-agent">
            <h1>Purchase Agent</h1>
            <button onClick={purchaseAgent}>Purchase</button>
        </div>
    );
}

export default Purchase;
