import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectCardIcon } from '../../../../media/ICONS';

const ProjectCard = ({ project }) => {
    const { id, name, stack, description, url } = project;
    const [ghHover, setGhHover] = useState(false);

    return (
        <div className='card' id={id}>
            <div className='card-content'>
                <div className='card-front'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-subtitle'>{stack.join(', ')}</p>
                </div>
                <div className='card-back'>
                    <p className='card-body'>{description}</p>
                    <a
                        href={url}
                        className='card-icon'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={projectCardIcon}
                            size='3x'
                            beat={ghHover}
                            className='m-auto mt-5'
                            onMouseEnter={() => setGhHover(true)}
                            onMouseLeave={() => setGhHover(false)}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;