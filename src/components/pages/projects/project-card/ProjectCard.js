import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectCardIcons } from '../../../../media/ICONS';

const ProjectCard = ({ project }) => {
    const { id, name, stack, description, url, status, img } = project;
    const imgUrl = `url(${img})`;

    return (
        <div className='card mx-auto' id={id}>
            <div className='card-content'>
                <div className='card-front' style={{ backgroundImage: imgUrl }}>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-subtitle'>{stack.join(', ')}</p>
                    <span className='flip-icon'>
                        <FontAwesomeIcon
                            icon={projectCardIcons[1]}
                            size='2x'
                            flip
                            className='mt-5 mx-auto'
                        />
                    </span>
                </div>
                <div className='card-back' style={{ backgroundImage: imgUrl }}>
                    <p className='card-body'>{description}</p>
                    <a
                        href={url}
                        className='gh-icon'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={status === 'gh' ? projectCardIcons[0] : projectCardIcons[2]}
                            size='2x'
                            bounce
                            className='m-auto mt-3'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;