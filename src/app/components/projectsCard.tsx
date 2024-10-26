import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard = (props: ProjectCardProps)  => {

    const {imageSrc, title, description} = props
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Project Image */}
      <Image src={imageSrc} alt={title} width={0} height={0} className="w-full h-48 object-cover" />
      
      {/* Card Content */}
      <div className="p-4 text-center">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {/* Project Description */}
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
