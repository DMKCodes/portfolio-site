import { Container, Row, Col } from 'reactstrap';
import { PROJECTS } from './project-card/PROJECTS';
import ProjectCard from './project-card/ProjectCard';

const ProjectsPage = () => {
    return (
        <Container className='page projects-page d-flex flex-column justify-content-center'>
            <Row className='projects-header'>
            <h2>projects/</h2>
                <p className='subheader mb-2'>ProjectsList.js</p>
            </Row>
            <Row className='projects-list d-flex align-items-center'>
                {PROJECTS.map((project) => {
                    return (
                        <Col xs='12' lg='6' xl='4' className='pb-4 d-flex justify-content-center' key={project.id}>
                            <ProjectCard project={project} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ProjectsPage;