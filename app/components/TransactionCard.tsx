import PunkAvatar from "./PunkAvatar";

interface Transaction {
  punk: string;
  action: string;
  amount: string;
  id: number;
}

const TransactionCard = ({ punk, action, amount, id }: Transaction) => (
  <div className="bg-gray-900 p-4 rounded-xl w-48 shrink-0">
    <PunkAvatar id={id} size="w-16 h-16" />
    <h4 className="mt-2 font-bold text-sm">Punk #{punk}</h4>
    <p className="text-xs text-orange-400">{action}</p>
    <p className="text-xs text-gray-400">{amount}</p>
  </div>
);

export default TransactionCard;
