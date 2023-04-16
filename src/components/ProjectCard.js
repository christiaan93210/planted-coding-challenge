const ProjectCard = (props) => {
  return (
    <div
      key={props.index}
      className="border border-[#202835] rounded-2xl mt-3 p-5"
    >
      <h2 className="text-[23px]">{props.project.location}</h2>
      <h2 className="text-[#3e78ad]">{props.project.distance} km</h2>
    </div>
  );
};

export default ProjectCard;
