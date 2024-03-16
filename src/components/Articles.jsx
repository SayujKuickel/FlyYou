import Button from "../components/Button";

export default function Articles({ articles }) {
  return (
    <ul className="container mx-auto grid md:grid-cols-3 gap-10">
      {articles.map((article, i) => (
        <li
          key={i}
          className="flex flex-col gap-4 justify-between transition-all"
        >
          <div>
            <img src={article.image} className="md:rounded-lg" />
            <h3 className="md:text-xl leading-none mt-4">{article.title}</h3>
          </div>

          <Button className="scale-90 block w-fiit">Read</Button>
        </li>
      ))}
    </ul>
  );
}
