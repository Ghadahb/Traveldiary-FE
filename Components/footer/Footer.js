import React, { useState } from 'react';
import { Container, Content, Text, Tabs, Tab } from 'native-base';


export const Footer = ({ navigation }) => {
  const [tabPage, setTabPage] = useState(0);

  const onChangeTab = (changeTabProps) => {
		const newTabIndex = changeTabProps.i;
    setTabPage(newTabIndex);
  };

  return (
     
    <Container>
      <Content>
        <Tabs 
          page={tabPage} 
          onChangeTab={onChangeTab}
        >
          <Tab 
          onPress={() => navigation.navigate("Home")}
          heading="Tab 1">
            <Text>tab 1</Text>
          </Tab>
          <Tab heading="Tab 2">
            <Text>tab 2</Text>
          </Tab>
        </Tabs>
      </Content>
    </Container>
  )
}

