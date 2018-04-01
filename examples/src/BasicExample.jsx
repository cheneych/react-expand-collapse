import React from "react";

import ExpandCollapse from "../../src/ExpandCollapse";

export default function BasicExample() {
  const options = {
    previewHeight: "88px"
  };

  return <div className="content__example">
      <h2 className="example__heading">Basic usage</h2>
      <div className="content-box">
        <div className="example__card">
          <p className="example-card__title">Movie Info: Inception</p>
          <ExpandCollapse {...options}>
            "Visionary filmmaker Christopher Nolan (Memento, The Dark Knight)
            writes and directs this psychological sci-fi action film about a
            thief who possesses the power to enter into the dreams of others.
            Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals
            ideas. By projecting himself deep into the subconscious of his
            targets, he can glean information that even the best computer
            hackers can't get to. In the world of corporate espionage, Cobb is
            the ultimate weapon. But even weapons have their weakness, and
            when Cobb loses everything, he's forced to embark on one final
            mission in a desperate quest for redemption. This time, Cobb won't
            be harvesting an idea, but sowing one. Should he and his team of
            specialists succeed, they will have discovered a new frontier in
            the art of psychic espionage. They've planned everything to
            perfection, and they have all the tools to get the job done. Their
            mission is complicated, however, by the sudden appearance of a
            malevolent foe that seems to know exactly what they're up to, and
            precisely how to stop them." ~ Jason Buchanan, Rovi.
          </ExpandCollapse>
        </div>
        <div className="example-code__card">
          <a href="https://github.com/dutiyesh/react-expand-collapse/blob/master/examples/src/BasicExample.jsx" title="See full code" className="example-card__title" target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <pre className="example-card__code-block">
            {`
import ExpandCollapse from 'react-expand-collapse';

<ExpandCollapse
  previewHeight="88px"
>
  "Visionary filmmaker Christopher Nolan...
</ExpandCollapse>
            `}
          </pre>
        </div>
      </div>
    </div>;
}