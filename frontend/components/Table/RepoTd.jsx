export default function App({ repo, imgSrc, description, hover }) {
  return (
    <td className="m-0 p-0 border-0 " title={description} id="scroll-container" >
      <div className="font-medium">{repo}</div>
      <div 
      id={hover ? "scroll-text" : ''}
      className="text-sm font-light text-slate-500 w-44 overflow-normal">
        {description}
      </div>
    </td>
  );
}
