import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

// utils
import {verboseDate} from './../../../utils/dates';

export const ExternalResource = (props) => {
  const resource = props.resource;
  const title = resource.shortDescription;
  const date = verboseDate(resource.updatedAt) ;
  const target = resource.url;

  return (
    <ShadowBox>
      <a href={target}>
        <div>
          <img src="#" alt="external resource" />
        </div>
        <div>
          <h3> {title} </h3>
          <span> {date} </span>
        </div>
      </a>
    </ShadowBox>
  );
}

export const ExternalResourceList = (props) => {

  const resources = props.items.map((resource, i) => {
    return <ExternalResource key={i} resource={resource} />
  });

  return (
    <div>
      {resources}
    </div>
  )
}

// export ExternalResource;
// export ExternalResourceList;