import React from "react";

export function Input(props) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-zinc-700 w-full focus-within:ring-2 ring-emerald-500 h-12">
      {props.children}
    </div>
  );
}

export function InputIcon(props) {
  return (
    <div className="w-6 h-6 text-zinc-400 flex justify-center items-center">
      {props.children}
    </div>
  );
}

export function InputText(props) {
  return (
    <input
      className="bg-transparent flex-1 text-zinc-100 placeholder:text-zinc-400 text-sm outline-none"
      {...props}
    />
  );
}
