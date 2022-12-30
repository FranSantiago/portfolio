import React, { useState } from 'react';
import { Options } from 'react-wordcloud';

import HeaderContent from '@/components/header-content';

import { useAppSelector } from '@/store';

import EducationSection from './education-section';
import ExperienceSection from './experience-section';
import SkillsSection from './skills-section';

import { skills, tabs } from './constants';

import { MainContent, Tab, TabsWrapper, Wrapper } from './styles';

const Resume: React.FC = () => {
  const { isSmallScreen } = useAppSelector(({ page }) => page);

  const [selectedTab, setSelectedTab] = useState(tabs.education.id);

  const options = React.useMemo(
    () =>
      ({
        ...(isSmallScreen
          ? { padding: 3 }
          : { fontSizes: [0, 55], padding: 5 }),
        enableTooltip: false,
        rotations: 1,
        rotationAngles: [0, 0],
        spiral: 'archimedean',
      } as Options),
    [isSmallScreen]
  );

  return (
    <Wrapper name="skills">
      <HeaderContent section="Skills" title="My resume" />
      <MainContent>
        <TabsWrapper>
          {Object.values(tabs).map((tab) => (
            <Tab
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              selected={selectedTab === tab.id}
            >
              {tab.value}
            </Tab>
          ))}
        </TabsWrapper>

        {selectedTab === tabs.education.id && <EducationSection />}

        {selectedTab === tabs.skills.id && (
          <SkillsSection options={options} words={skills} />
        )}

        {selectedTab === tabs.experience.id && <ExperienceSection />}
      </MainContent>
    </Wrapper>
  );
};

export default Resume;
