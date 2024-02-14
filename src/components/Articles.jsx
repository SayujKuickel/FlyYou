export default function Articles({ articles }) {
  return (
    <ul className="flex gap-6 flex-wrap items-center justify-center">
      {articles.map((article) => (
        <li className="md:max-w-[400px] flex flex-col gap-4 hover:scale-[1.02] transition-all">
          <img src={article.image} className="rounded-tr-[50px] " />
          <h3 className="md:text-xl leading-none">{article.title}</h3>
          <a
            href="#"
            className="text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all w-fit px-6 py-2"
          >
            Read
          </a>
        </li>
      ))}
    </ul>
  );
}
