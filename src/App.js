import React from "react";
import Web3 from "web3";
import Playground from "./abis/Playground.json";

import { Footer, Home, Topbar } from "./components/index";

import "./styles.css";

const App = () => {
    const [account, setAccount] = React.useState();
    const [playgroundContract, setPlaygroundContract] = React.useState();
    const [playgroundContractData, setPlaygroundContractData] = React.useState();

    React.useEffect(() => {
        loadWeb3();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });

            setAccount(accounts[0]);

            const web3 = new Web3(window.ethereum);

            const networkId = await web3.eth.net.getId();

            const playgroundData = Playground.networks[networkId];

            if (playgroundData) {
                const contract = new web3.eth.Contract(Playground.abi, playgroundData.address);
                setPlaygroundContract(contract);

                contract.methods.getData().call().then((data) => {
                    console.log(data);

                    setPlaygroundContractData(data);
                });
            }
        }
        else {
            window.alert("Non-Ethereum browser detected. You should consider trying MetaMask.");
        }
    };

    return (
        <div className="App">
            <div className="topbar">
                <Topbar account={account} />
            </div>
            <div className="main mt-4 mb-4">
                <Home playgroundData={playgroundContractData} />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div >
    );
}

export default App;
