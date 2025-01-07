import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  useState();
  // let tabContent = 'Please click a button';
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(lbl) {
    setSelectedTopic(lbl);
    console.log(lbl + ' - selected!');
  }

  let tabContent = <p>Please select a topic.</p>;
  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
        {EXAMPLES[selectedTopic].code}
        </pre>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onMouse={() => handleClick('JSX')}>JSX</TabButton>
            <TabButton onMouse={() => handleClick('Props')}>Props</TabButton>
            <TabButton onMouse={() => handleClick('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
