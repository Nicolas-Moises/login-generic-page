export function Button(props) {
  return (
    <button
      className="h-12 py-3 px-4 bg-emerald-500 rounded font-semibold text-zinc-100 text-sm w-full mt-2 hover:bg-emerald-600 transition-colors focus:ring-2 ring-white"
      {...props}
    ></button>
  );
}
