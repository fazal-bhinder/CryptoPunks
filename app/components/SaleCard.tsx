import PunkAvatar from './PunkAvatar';

interface Sale {
  punk: string;
  price: string;
  date: string;
  id: number;
}

const SaleCard = ({ punk, price, date, id }: Sale) => (
  <div className="bg-gray-900 p-4 rounded-xl w-48 shrink-0">
    <PunkAvatar id={id} size="w-16 h-16" />
    <h4 className="mt-2 font-bold text-sm">Punk #{punk}</h4>
    <p className="text-xs text-gray-400">{price}</p>
    <p className="text-xs text-gray-600">{date}</p>
  </div>
);

export default SaleCard;
