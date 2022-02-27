export const Article = ({ title, selectors, content }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-8 gap-3">
        <div>
          <ul>
            <li className="text-2xl font-bold">Content.</li>
            {selectors.map((item, i) => (
              <li className="hover:text-sky-800" key={i}>
                <a href={`#${item}`} key={i}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6">
          <h1 className="text-center font-bold text-4xl capitalize">{title}</h1>
          {content.map((item, i) => {
            return (
              <div key={i} className="my-4">
                <h3 className="text-1xl italic underline">{item.sub_title}</h3>
                <div className="mt-2">{item.content}</div>
              </div>
            );
          })}
        </div>
        <div>
          <ul className="text-center">
            <li className="text-bold text-2xl font-bold">Number One.</li>
            <li>number two.</li>
            <li>number thre.</li>
            <li>number four.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
