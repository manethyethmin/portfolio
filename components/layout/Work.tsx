import type { NextPage } from 'next';
import { Button, Flex, SectionHeading, SectionWrapper } from '../shared';
import styles from '../../styles/Work.module.scss';
import { BiChevronRight } from 'react-icons/bi';

const About: NextPage = () => {
  return (
    <div className='container' id='work'>
      <div className={styles.wrapper}>
        <SectionWrapper topMargin={75}>
          <Flex>
            <div className={styles.col1}>
              <SectionHeading heading='My Work' />
              <p style={{ marginTop: '20px', marginBottom: '30px' }}>
                Looking other peoples&apos; projects can be a great way to learn
                and teach, share and gain experience. If you like feel free to
                check my Projects on Github.
              </p>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/manethyethmin?tab=repositories'
              >
                <Button variant='primary'>
                  Explore
                  <BiChevronRight fontSize={30} />
                </Button>
              </a>
            </div>
            <div className={styles.col2}>
              <img src='/assets/cat.gif' alt='Lazy cat' />
            </div>
          </Flex>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default About;
