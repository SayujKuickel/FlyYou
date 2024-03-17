export default function Services({ services }) {
  return (
    <ul className="flex flex-wrap justify-center my-10 gap-4 md:gap-8">
      {services.map((service) => (
        <li className="w-52 aspect-square flex flex-col gap-2">
          <div className="w-full rounded-full bg-gray-800/20 p-2 aspect-square grid place-items-center">
            <img
              src={service.url}
              alt={`id for ${service.url}`}
              className="invert-[70%] hue-rotate-[200deg]"
            />
          </div>
          <span className="text-xl">{service.name}</span>
        </li>
      ))}
    </ul>
  );
}
