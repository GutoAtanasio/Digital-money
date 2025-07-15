import {
    ArrowCircleDown,
    ArrowCircleUp,
    ArrowCircleUpLeft,
    CurrencyDollar,
    TrashSimple,
} from "phosphor-react";
import Modal from "../components/Modal/Modal";
import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import axios from "axios";
import { API_BADE_URL } from "../utils/constants";
import DropdownOpitions from "../components/DropdownOpition/DropdownOpitions";

function DashbordPage() {
    const [open, setOpen] = useState(false);
    const [transactions, setTransactions] = useState([])
    console.log(transactions);

    async function getTransactions() {
        const transactionsData = await axios.get("http://localhost:3000/transactions");
        setTransactions(transactionsData.data);
    }
    // getTransactions();
    useEffect(() => { getTransactions(); }, []);

    async function handleDeleteTransaction(id) {
        //Pop-up de confirmação
        const confirm = window.confirm("Tem certeza que deseja excluir essa transação?");
        if (confirm === false) {
            return;
        }
        await axios.delete(API_BADE_URL + `/transactions/${id}`);
    }

    const allInputsSum = transactions.filter((transactions) => transactions.transactionType === "input").reduce((prev, curr) =>{
        return prev + parseFloat(curr.price);
    },0);
    console.log(allInputsSum);


    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="w-full bg-pink-700 py-6 pb-32 md:px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-xl md:text-2xl font-bold">
                        digital money
                    </h1>
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer"
                    >
                        Nova transação
                    </button>
                </div>

                <div className="flex justify-end pt-4 md:mt-0">
                    <DropdownOpitions />
                </div>
                
            </header>
            <main className="flex-1 container mx-auto py-8 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
                    <Card title="Entradas" icon={<ArrowCircleUp className="text-green-500" size={32} />} amount={allInputsSum} bgColor="bg-white" />
                    <Card title="Saídas" icon={<ArrowCircleDown className="text-red-500" size={32} />} amount={0} bgColor="bg-white" />
                    <Card title="Total" icon={<CurrencyDollar size={32} />} amount={0} bgColor="bg-emerald-500" textColor="text-white" />

                </div>
                <div className="overflow-x-auto mt-8">
                    {/* Tabelas */}
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-500">
                                <th className="px-6 py-3 pb-4 font-medium">Título</th>
                                <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                                <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                                <th className="px-6 py-3 pb-4 font-medium">Data</th>
                                <th className="px-6 py-3 pb-4 font-medium">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactions.map((transaction, index) => {
                                return (
                                    <tr key={index} className="hover:bg-gray-50 bg-white">
                                        <td className="px-6 py-4">{transaction.title}</td>
                                        <td className="px-6 py-4 text-green-500 font-medium">
                                            {transaction.price}
                                        </td>
                                        <td className="px-6 py-4">{transaction.category}</td>
                                        <td className="px-6 py-4">{transaction.date}</td>
                                        <td className="px-6 py-4">
                                            <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                                <TrashSimple size={24} weight="fill" className="text-red-500" onClick={() => handleDeleteTransaction(transaction.id)} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>

            <Modal open={open} setOpen={setOpen} />
        </div>
    );
}

export default DashbordPage;