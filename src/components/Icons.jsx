export default function Icons({ src }) {
  return (
    <div className="circle bg-slate-50 w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full cursor-pointer">
      <img src={src} />
    </div>
  );
}
