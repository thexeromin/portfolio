import { useState } from 'react'

import type { NextComponentType, NextPageContext } from 'next'
import {
  Grid,
  GridItem,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { FaHtml5, FaMobile } from 'react-icons/fa'

import ProjectCard from './ProjectCard'
import SectionWrapper from '../SectionWrapper'

import { project_lists } from '../../utils'

interface ProjectContainerProps {}

const ProjectContainer: NextComponentType<
  NextPageContext,
  {},
  ProjectContainerProps
> = () => {
  const tabs = [
    {
      label: 'Web',
      category: 'web',
      icon: <FaHtml5 />,
    },
    {
      label: 'Mobile',
      category: 'mobile',
      icon: <FaMobile />,
    },
  ]

  return (
    <SectionWrapper
      id="projects"
      title="My Projects"
      desc="Get more details by hovering over the image."
    >
      <Tabs variant={'line'}>
        <TabList
          overflowX="auto"
          css={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': { display: 'none' },
            '-webkit-overflow-scrolling': 'touch',
            boxShadow: 'inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          {tabs.map(({ label, icon }, idx) => (
            <Tab key={label + idx}>
              <Stack spacing={2} direction="row" align="center">
                {icon} <span>{label}</span>
              </Stack>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(({ label, category }, idx) => (
            <TabPanel key={label + idx}>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                  lg: 'repeat(2, 1fr)',
                }}
                gap={5}
                w={'full'}
              >
                {project_lists.map(
                  (project) =>
                    project.category.includes(category) && (
                      <GridItem key={`${project.title}`}>
                        <ProjectCard config={project} />
                      </GridItem>
                    )
                )}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </SectionWrapper>
  )
}

export default ProjectContainer
