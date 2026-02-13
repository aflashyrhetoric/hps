import React from "react";

type Props = {
	className?: string;
	paid?: boolean;
};

const Badge: React.FC<Props> = ({ paid = false, className = "" }: Props) => {
	const bgClass = paid ? "bg-teal-500" : "bg-emerald-500";

	const text = paid ? "Paid" : "Free";

	return (
		<span
			className={`text-sm inline-flex rounded-full text-neutral-800 font-bold uppercase font-montserrat items-center justify-center py-px px-2 mr-1 ${bgClass}`}
		>
			{text}
		</span>
	);
};

export default Badge;
