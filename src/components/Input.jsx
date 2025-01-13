export default function Input({ label, invalid, ...props }) {
  let labelClasses = `mb-2 block text-xs 
    font-bold uppercase tracking-wide ${invalid ? "text-red-400" : "text-stone-300"}`;
  let inputClasses = `w-full rounded border  px-3 py-2 leading-tight shadow 
  ${invalid ? "text-red-500 bg-red-100 border-red-300" : "text-gray-700 bg-stone-300"}`;

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
