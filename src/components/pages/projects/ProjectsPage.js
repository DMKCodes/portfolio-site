import { useState } from 'react';
import { 
    Container, 
    Row, 
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';
import { PROJECTS } from './project-card/PROJECTS';
import ProjectCard from './project-card/ProjectCard';

const ProjectsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === PROJECTS.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? PROJECTS.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <Container className='page projects-page d-flex flex-column justify-content-center'>
            <Row className='projects-header'>
                <h2>projects/</h2>
                <p className='subheader mb-2'>ProjectsList.js</p>
            </Row>
            <Row className='projects-list'>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    enableTouch={true}
                    interval={false}
                >
                    {PROJECTS.map((project) => {
                        return (
                            <CarouselItem
                                key={project.id} 
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}
                            >
                                <ProjectCard project={project} />
                            </CarouselItem>
                        );
                    })}
                    <CarouselControl 
                        direction='prev'
                        directionText='Previous'
                        onClickHandler={previous}
                    />
                    <CarouselControl 
                        direction='next'
                        directionText='Next'
                        onClickHandler={next}
                    />
                </Carousel>
            </Row>
        </Container>
    );
};

export default ProjectsPage;