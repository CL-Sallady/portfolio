import '../Css/LandingPage.css';
import { GithubOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd'
import { useState } from 'react'

function ProjectItem({ theme, title, alt, path, description, link, website }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const footerButtons = [<Button key="submit" className= 'card-link' onClick={toggleModal}>Close</Button>]
  if(link && !website){
    footerButtons.push(<Button href={link} className= 'card-link-primary' target="_blank" rel="noreferrer"><GithubOutlined /> View Code </Button>)
  } else {
    footerButtons.push(<Button className='card-link-primary' href={website}target="_blank" rel="noreferrer" ><ArrowRightOutlined /> Visit Website</Button>)
  }
  return (
    <div className={theme} onClick={toggleModal}>
      <img className='card-img' src={path} alt={alt} />
      <h4 className={`card-title`}>{title}</h4>
      <br></br>
      <Modal
      open={modalVisible}
      title={title}
      onCancel={toggleModal}
      footer={footerButtons}
    >
      <p className='card-left'>{description}</p>
      <br></br>
    </Modal>
  </div>
  );
}

export default ProjectItem;
