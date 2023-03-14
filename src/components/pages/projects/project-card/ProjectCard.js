import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectCardIcons } from '../../../../media/ICONS';
import camping from '../../../../media/camping.jpg';
import code from '../../../../media/code.jpg';
import lair from '../../../../media/lair.png';
import pokemon from '../../../../media/pokemon.jpg';

const ProjectCard = ({ project }) => {
    const { id, name, stack, description, url } = project;

    const getBg = (id) => {
        if (id === 1) {
            return pokemon;
        } else if (id === 2) {
            return code;
        } else if (id === 3) {
            return camping;
        } else if (id === 4) {
            return lair;
        }
    };

    return (
        <div className='card mx-auto' id={id}>
            <div className='card-content'>
                <div className='card-front' style={{ backgroundImage: `url(${getBg(id)})` }}>
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
                <div className='card-back' style={{ backgroundImage: `url(${getBg(id)})` }}>
                    <p className='card-body'>{description}</p>
                    <a
                        href={url}
                        className='gh-icon'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={projectCardIcons[0]}
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