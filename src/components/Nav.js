import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-[10px] flex justify-between text-mmd md:text-md">
      <Link
        className="hover:italic"
        href="https://anisiakuzmina.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Анисия Кузьмина
      </Link>
    </div>
  );
}
